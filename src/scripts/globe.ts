import createGlobe from "cobe";

const SIZE = 450;

type GlobeTheme = {
  dark: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  mapBrightness: number;
};

const lightTheme: GlobeTheme = {
  dark: 0,
  baseColor: [1, 1, 1],
  markerColor: [22 / 255, 163 / 255, 74 / 255],
  glowColor: [1, 1, 1],
  mapBrightness: 6,
};

const darkTheme: GlobeTheme = {
  dark: 1,
  baseColor: [0.32, 0.32, 0.36],
  markerColor: [74 / 255, 222 / 255, 128 / 255],
  glowColor: [0.16, 0.16, 0.18],
  mapBrightness: 4,
};

const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

const ROTATION_RATE = 0.00021;
const SPRING_K = 200;
const SPRING_C = 40;
const SPRING_M = 1;

export type StartGlobeOptions = {
  staticFrame?: boolean;
};

export function startGlobe(canvas: HTMLCanvasElement, options: StartGlobeOptions = {}) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const px = SIZE * dpr;

  let phi = 4.4;
  let dragTarget = 0;
  let dragValue = 0;
  let dragVelocity = 0;
  let lastOffsetPx = 0;
  let pointerOriginX: number | null = null;

  const globe = createGlobe(canvas, {
    devicePixelRatio: dpr,
    width: px,
    height: px,
    phi,
    theta: 0.25,
    diffuse: 1.2,
    mapSamples: 16000,
    ...(isDark() ? darkTheme : lightTheme),
    markers: [
      { id: "bangalore", location: [12.9716, 77.5946], size: 0.04 },
    ],
  });

  if (options.staticFrame) {
    globe.update({ phi });
    new MutationObserver(() => {
      globe.update(isDark() ? darkTheme : lightTheme);
      globe.update({ phi });
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    window.addEventListener("pagehide", () => globe.destroy(), { once: true });
    return;
  }

  let raf = 0;
  let lastTime = performance.now();
  function tick(now: number) {
    const dtMs = now - lastTime;
    lastTime = now;
    phi += ROTATION_RATE * dtMs;

    const dt = Math.min(dtMs / 1000, 1 / 60);
    const accel = (-SPRING_K * (dragValue - dragTarget) - SPRING_C * dragVelocity) / SPRING_M;
    dragVelocity += accel * dt;
    dragValue += dragVelocity * dt;

    globe.update({ phi: phi + dragValue });
    raf = requestAnimationFrame(tick);
  }
  raf = requestAnimationFrame(tick);

  const onDown = (e: PointerEvent) => {
    pointerOriginX = e.clientX - lastOffsetPx;
    canvas.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent) => {
    if (pointerOriginX === null) return;
    lastOffsetPx = e.clientX - pointerOriginX;
    dragTarget = lastOffsetPx / 100;
  };
  const onUp = () => {
    pointerOriginX = null;
  };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("lostpointercapture", onUp);

  new MutationObserver(() => {
    globe.update(isDark() ? darkTheme : lightTheme);
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  window.addEventListener("pagehide", () => {
    cancelAnimationFrame(raf);
    globe.destroy();
  }, { once: true });
}
