function setupSakuraScene(tree: HTMLElement) {
  const sway = tree.querySelector<SVGGElement>("[data-sakura-sway]");
  if (!sway) return;

  const petals = [...document.querySelectorAll<HTMLElement>("[data-sakura-petals]")];
  const backgroundPetals = petals.find((layer) => layer.dataset.sakuraPetals === "background");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointerSpring = { angle: 0, velocity: 0, target: 0 };
  const scrollSpring = { angle: 0, velocity: 0 };
  const scrollSources = [
    { element: document as EventTarget, position: () => window.scrollY, previous: 0 },
    ...[...document.querySelectorAll<HTMLElement>("[data-sakura-scroll]")].map((element) => ({
      element: element as EventTarget,
      // Apply the same scroll impulse to the home page's horizontal card scroller.
      position: () => element.dataset.sakuraScroll === "horizontal" ? element.scrollLeft : element.scrollTop,
      previous: 0,
    })),
  ];

  let imageReady = false;
  let flowersReady = false;
  let inView = true;
  let backgroundInView = true;
  let playing = false;
  let disposed = false;
  let frame = 0;
  let revealFrame = 0;
  let previousTime = 0;
  let pointer: { x: number; y: number } | null = null;
  let pointerChanged = false;
  let bounds: DOMRect | null = null;
  let boundsDirty = true;
  let previousTransform = "";

  function schedule() {
    if (!frame && playing && !disposed) frame = requestAnimationFrame(animate);
  }

  function onPointerMove(event: PointerEvent) {
    if (!playing) return;
    pointer = { x: event.clientX, y: event.clientY };
    pointerChanged = true;
    schedule();
  }

  function onPointerLeave() {
    pointer = null;
    pointerChanged = false;
    pointerSpring.target = 0;
    schedule();
  }

  function onScroll(event: Event) {
    if (!playing) return;
    const source = scrollSources.find((source) => source.element === event.currentTarget);
    if (!source) return;
    const position = source.position();
    const delta = Math.max(-40, Math.min(40, position - source.previous));
    scrollSpring.velocity = Math.max(-1.2, Math.min(1.2, scrollSpring.velocity - delta * 0.018));
    source.previous = position;
    boundsDirty = true;
    schedule();
  }

  function animate(time: number) {
    frame = 0;
    if (!playing || disposed) return;
    const elapsed = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 1 / 60;
    previousTime = time;
    const steps = Math.max(1, Math.ceil(elapsed * 60));
    const step = elapsed / steps;

    if (pointer && boundsDirty) {
      bounds = tree.getBoundingClientRect();
      boundsDirty = false;
    }
    if (pointer && bounds) {
      if (pointer.x < bounds.left || pointer.x > bounds.right || pointer.y < bounds.top || pointer.y > bounds.bottom) {
        pointer = null;
        pointerSpring.target = 0;
      } else if (pointerChanged) {
        const x = (bounds.right - pointer.x) / bounds.width;
        const y = (pointer.y - bounds.top) / bounds.height;
        pointerSpring.target = (x * 0.7 + y * 0.9 - 0.8) * 1.4;
      }
    }
    pointerChanged = false;

    for (let index = 0; index < steps; index++) {
      pointerSpring.velocity += (-(pointerSpring.angle - pointerSpring.target) * 60 - pointerSpring.velocity * 7) * step;
      pointerSpring.angle = Math.max(-3.5, Math.min(3.5, pointerSpring.angle + pointerSpring.velocity * step));
      scrollSpring.velocity += (-scrollSpring.angle * 18 - scrollSpring.velocity * 7) * step;
      scrollSpring.angle += scrollSpring.velocity * step;
    }

    const scrollMoving = Math.abs(scrollSpring.velocity) > 0.01 || Math.abs(scrollSpring.angle) > 0.005;
    if (!scrollMoving) scrollSpring.angle = scrollSpring.velocity = 0;
    const scrollAngle = 0.65 * Math.tanh(scrollSpring.angle / 0.65);
    const transform = `rotate(${(pointerSpring.angle + scrollAngle).toFixed(3)} 100 70)`;
    if (transform !== previousTransform) {
      sway!.setAttribute("transform", transform);
      previousTransform = transform;
    }
    if (scrollMoving || Math.abs(pointerSpring.velocity) > 0.01 || Math.abs(pointerSpring.angle - pointerSpring.target) > 0.01) {
      schedule();
    } else {
      previousTime = 0;
    }
  }

  function invalidateBounds() {
    boundsDirty = true;
  }

  function stopMotion() {
    cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    pointer = null;
    pointerChanged = false;
    pointerSpring.target = 0;
    scrollSources.forEach(({ element }) => element.removeEventListener("scroll", onScroll));
    window.removeEventListener("pointermove", onPointerMove);
    document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    window.removeEventListener("resize", invalidateBounds);
  }

  function revealAfterPaint() {
    if (revealFrame || flowersReady || !imageReady || !inView || document.hidden || disposed) return;
    // Leave a paint between image decoding and the flower animations.
    revealFrame = requestAnimationFrame(() => {
      revealFrame = requestAnimationFrame(() => {
        revealFrame = 0;
        if (disposed || !inView || document.hidden) return;
        flowersReady = true;
        update();
      });
    });
  }

  function update() {
    if (disposed) return;
    revealAfterPaint();
    petals.forEach((layer) => {
      layer.classList.toggle("is-initializing", !flowersReady);
      layer.classList.toggle("is-paused", !flowersReady || document.hidden || (layer === backgroundPetals && !backgroundInView));
    });

    const shouldPlay = flowersReady && inView && !document.hidden && !reducedMotion.matches;
    if (flowersReady) {
      tree.classList.remove("is-initializing");
      tree.classList.add("is-ready");
    }
    tree.classList.toggle("is-playing", shouldPlay);
    if (playing === shouldPlay) return;
    playing = shouldPlay;
    if (!playing) {
      stopMotion();
      return;
    }

    boundsDirty = true;
    scrollSources.forEach((source) => {
      source.previous = source.position();
      source.element.addEventListener("scroll", onScroll, { passive: true });
    });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", invalidateBounds, { passive: true });
    schedule();
  }

  function settleBloom(event: AnimationEvent) {
    if (event.target instanceof Element && event.target.matches(".sakura-hero__bud, .sakura-hero__bloom")) {
      event.target.classList.add("is-settled");
    }
  }

  const treeObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    update();
  });
  const petalObserver = new IntersectionObserver(([entry]) => {
    backgroundInView = entry.isIntersecting;
    update();
  });
  const resizeObserver = new ResizeObserver(invalidateBounds);
  treeObserver.observe(tree);
  if (backgroundPetals) petalObserver.observe(backgroundPetals);
  resizeObserver.observe(tree);
  reducedMotion.addEventListener("change", update);
  document.addEventListener("visibilitychange", update);
  window.addEventListener("pageshow", update);
  tree.addEventListener("animationend", settleBloom);

  function cleanup(event: PageTransitionEvent) {
    if (event.persisted) return;
    disposed = true;
    cancelAnimationFrame(revealFrame);
    stopMotion();
    treeObserver.disconnect();
    petalObserver.disconnect();
    resizeObserver.disconnect();
    reducedMotion.removeEventListener("change", update);
    document.removeEventListener("visibilitychange", update);
    window.removeEventListener("pageshow", update);
    window.removeEventListener("pagehide", cleanup);
    tree.removeEventListener("animationend", settleBloom);
  }
  window.addEventListener("pagehide", cleanup);

  update();
  const image = new Image();
  image.src = tree.querySelector("image")!.getAttribute("href")!;
  image.decode().then(() => {
    if (disposed) return;
    imageReady = true;
    update();
  }, () => {});
}

document.querySelectorAll<HTMLElement>("[data-sakura-tree]").forEach(setupSakuraScene);
