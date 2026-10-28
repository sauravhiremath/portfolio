// Dot Field, adapted from React Bits for a native canvas in Astro.

interface DotFieldOptions {
  bulgeStrength?: number;
  glowRadius?: number;
  cursorRadius?: number;
  lightMode?: boolean;
  intro?: boolean;
}

interface Program {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation | null>;
}

const PIXEL_BUDGET = 9e6;
const MAX_DOTS = 120000;

const VERTEX = `#version 300 es
precision highp float;
layout(location = 0) in vec4 aDot;
uniform vec2 uSize;
uniform float uPixel;
uniform float uRadius;
uniform float uCell;
uniform vec4 uLens;
uniform vec2 uWarp;
uniform vec3 uGlow;
uniform vec3 uFrom;
uniform vec3 uTo;
uniform vec4 uGlowColor;
uniform vec3 uGradient;
uniform float uTime;
uniform float uWave;
uniform float uSparkle;
uniform float uFocus;
uniform float uBase;
uniform float uLight;
out vec2 vLocal;
out float vRadius;
out float vBlur;
out float vHalo;
out float vHaloWidth;
out vec3 vColor;
out float vAlpha;

vec3 toRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.291485548 * lab.z;
  vec3 lms = vec3(l * l * l, m * m * m, s * s * s);
  vec3 lin = clamp(vec3(
    4.0767416621 * lms.x - 3.3077115913 * lms.y + 0.2309699292 * lms.z,
    -1.2684380046 * lms.x + 2.6097574011 * lms.y - 0.3413193965 * lms.z,
    -0.0041960863 * lms.x - 0.7034186147 * lms.y + 1.707614701 * lms.z
  ), 0.0, 1.0);
  return mix(lin * 12.92, 1.055 * pow(lin, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, lin));
}

vec3 blend(vec3 a, vec3 b, float t) {
  vec2 ab = mix(a.yz, b.yz, t);
  float chroma = mix(length(a.yz), length(b.yz), t);
  float len = length(ab);
  return vec3(mix(a.x, b.x, t), len > 1e-5 ? ab * (chroma / len) : ab);
}

vec3 wave(vec2 p, float t) {
  float ay = p.x * 0.018 + t + 1.1 * sin(p.y * 0.016 - t * 0.4);
  float ax = p.y * 0.021 + t * 0.7 + 1.3 * sin(p.x * 0.013 + t * 0.3);
  float spread = cos(ay) * 0.0176 * cos(p.y * 0.016 - t * 0.4) + 0.5 * cos(ax) * 0.0169 * cos(p.x * 0.013 + t * 0.3);
  return uWave * vec3(0.5 * sin(ax), sin(ay), spread);
}

void main() {
  vec2 corner = vec2(float(gl_VertexID & 1), float(gl_VertexID >> 1)) * 2.0 - 1.0;
  vec2 center = uSize * 0.5;
  vec3 swell = wave(aDot.xy, uTime);
  vec2 source = center + (aDot.xy - center) * mix(1.12, 1.0, uFocus) + swell.xy;

  vec2 rel = source - uLens.xy;
  float x = length(rel) / uLens.z;
  float y = clamp(1.0 - x * x, 0.0, 1.0);
  float w = y * y * y;
  float k = uWarp.x * uLens.w;
  float grow = 1.0 + k * w;
  float spread = 1.0 + k * (w - 6.0 * x * x * y * y);
  float theta = uWarp.y * uLens.w * w;
  vec2 turn = vec2(cos(theta), sin(theta));
  vec2 display = uLens.xy + vec2(turn.x * rel.x - turn.y * rel.y, turn.y * rel.x + turn.x * rel.y) * grow;
  float scale = sqrt(max(grow * spread, 0.02));

  float spark = 0.0;
  if (uSparkle > 0.0) {
    float phase = 0.5 + 0.5 * sin(uTime * (0.55 + aDot.w * 0.9) + aDot.z * 6.2831853);
    spark = pow(phase, 48.0) * step(0.72, fract(aDot.z * 7.31 + aDot.w * 3.17)) * uSparkle;
  }

  float pool = 0.0;
  if (uGlow.x > 0.0) {
    float g = length(display - uLens.xy) / uGlow.x;
    float q = clamp(1.0 - g * g, 0.0, 1.0);
    pool = q * q * uGlow.y * uLens.w;
  }

  float radius = uRadius * (1.0 + 0.7 * spark);
  float device = radius * scale * uPixel;
  float fade = 1.0;
  if (device < 0.75) {
    fade = device * device / 0.5625;
    radius = 0.75 / (scale * uPixel);
  }
  float blur = (1.0 - uFocus) * uCell * 0.42;
  float energy = pow(radius / (radius + blur), 1.15);
  float halo = pool * uGlow.z;
  float haloWidth = 2.0 + radius * 1.5;
  float pad = radius + blur * 1.2 + 1.5 / (scale * uPixel) + (halo > 0.0 ? haloWidth * 2.5 : 0.0);

  float t = clamp(dot(aDot.xy - center, uGradient.xy) / uGradient.z + 0.5, 0.0, 1.0);
  vec3 tone = blend(uFrom, uTo, t);
  vec3 deep = vec3(tone.x * 0.72, tone.yz * 1.3);
  vec3 base = toRgb(tone);
  vec3 lit = toRgb(mix(deep, uGlowColor.xyz, uGlowColor.w));
  vec3 color = mix(base, lit, clamp(pool, 0.0, 1.0) * 0.8);
  color = mix(color, uLight > 0.5 ? color * 0.6 : vec3(1.0), spark * 0.55);

  vLocal = corner * pad;
  vRadius = radius + blur;
  vBlur = blur * 0.7;
  vHalo = halo;
  vHaloWidth = haloWidth;
  vColor = color;
  float shade = clamp(1.0 - swell.z * 2.5, 0.4, 1.6);
  vAlpha = mix(min(uBase * shade, 1.0), 1.0, clamp(max(pool, spark), 0.0, 1.0)) * fade * energy * smoothstep(0.0, 0.25, uFocus + 0.08);
  vec2 point = display + corner * pad * scale;
  gl_Position = vec4(point.x / uSize.x * 2.0 - 1.0, 1.0 - point.y / uSize.y * 2.0, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform float uOpacity;
in vec2 vLocal;
in float vRadius;
in float vBlur;
in float vHalo;
in float vHaloWidth;
in vec3 vColor;
in float vAlpha;
out vec4 fragColor;

void main() {
  float dist = length(vLocal);
  float d = dist - vRadius;
  float edge = max(fwidth(dist), 1e-4) + vBlur;
  float cover = 1.0 - smoothstep(-0.5 * edge, 0.5 * edge, d);
  float glow = vHalo * exp(-max(d, 0.0) / vHaloWidth) * 0.5;
  float alpha = min(cover + glow, 1.0) * vAlpha * uOpacity;
  if (alpha < 0.002) discard;
  fragColor = vec4(vColor * alpha, alpha);
}`;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const toOklab = (color: number[]) => {
  const [r, g, b] = color.map(channel => channel <= 0.04045 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4));
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
};

const parseColor = (value: string) => {
  const hex = /^#([0-9a-f]{6})$/i.exec(value.trim());
  if (hex) return [0, 2, 4].map(index => parseInt(hex[1].slice(index, index + 2), 16) / 255);
  const rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(value);
  return rgb ? rgb.slice(1, 4).map(channel => clamp(parseFloat(channel) / 255, 0, 1)) : [1, 1, 1];
};

const toInk = (color: string, light: boolean) => {
  const lab = toOklab(parseColor(color));
  if (!light) return lab;
  const hue = Math.atan2(lab[2], lab[1]) * 180 / Math.PI;
  const warmth = clamp(1 - Math.abs(hue - 85) / 40, 0, 1);
  const ceiling = 0.6 + 0.16 * warmth * warmth * (3 - 2 * warmth);
  if (lab[0] <= ceiling) return lab;
  const boost = 1 + (lab[0] - ceiling) * 1.6;
  return [ceiling, lab[1] * boost, lab[2] * boost];
};

const hash = (a: number, b: number, c: number) => {
  let h = (Math.imul(a, 374761393) + Math.imul(b, 668265263) + Math.imul(c, 1274126177)) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
};

const lensReach = (radius: number, strength: number) => {
  let peak = 0;
  for (let index = 1; index < 48; index++) {
    const x = index / 48;
    const w = (1 - x * x) ** 3;
    const sigma = x * radius;
    peak = Math.max(peak, Math.abs(sigma * strength * w));
  }
  return peak;
};

const buildDots = (width: number, height: number, step: number, margin: number) => {
  const cx = width / 2;
  const cy = height / 2;
  const cols = Math.ceil((width / 2 + margin) / step) + 1;
  const rows = Math.ceil((height / 2 + margin) / step) + 1;
  const dots: number[] = [];
  for (let row = -rows; row <= rows; row++) {
    for (let col = -cols; col <= cols; col++) {
      const x = cx + col * step;
      const y = cy + row * step;
      if (x >= -margin && x <= width + margin && y >= -margin && y <= height + margin) {
        dots.push(x, y, hash(col, row, 3), hash(col, row, 4));
      }
    }
  }
  return new Float32Array(dots);
};

const compile = (gl: WebGL2RenderingContext, type: number, source: string) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const link = (gl: WebGL2RenderingContext): Program | null => {
  const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = vertex && fragment ? gl.createProgram() : null;
  if (!vertex || !fragment || !program) {
    if (vertex) gl.deleteShader(vertex);
    if (fragment) gl.deleteShader(fragment);
    return null;
  }
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  const uniforms: Program["uniforms"] = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let index = 0; index < count; index++) {
    const info = gl.getActiveUniform(program, index);
    if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms };
};

export function startDotField(container: HTMLElement, options: DotFieldOptions = {}): () => void {
  const canvas = container.querySelector<HTMLCanvasElement>("[data-dot-field]");
  const gl = canvas?.getContext("webgl2", {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: "high-performance",
  });
  const shader = gl ? link(gl) : null;
  if (!canvas || !gl || !shader) return () => {};

  // The grid, intro, and hold-to-zoom use the component's defaults.
  const light = options.lightMode ?? false;
  const readInk = (property: string, fallback: string) => toInk(getComputedStyle(canvas).getPropertyValue(property).trim() || fallback, light);
  const s = {
    radius: 1.5,
    step: 17,
    from: readInk("--dot-field-from", "#ad4e71"),
    to: readInk("--dot-field-to", "#efb4c9"),
    glowColor: toInk("#ffffff", light),
    glowWeight: light ? 0 : 1,
    direction: [Math.sin(135 * Math.PI / 180), -Math.cos(135 * Math.PI / 180)],
    lensRadius: clamp(options.cursorRadius ?? 240, 20, 2000),
    strength: clamp(options.bulgeStrength ?? 0.6, -1, 1),
    glowRadius: Math.max(0, options.glowRadius ?? 160),
    glowIntensity: 0.8,
    base: 0.55,
    light,
  };
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = motion.matches;
  const vao = gl.createVertexArray();
  const buffer = gl.createBuffer();
  gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 4, gl.FLOAT, false, 16, 0);
  gl.vertexAttribDivisor(0, 1);
  gl.bindVertexArray(null);

  const size = { width: 1, height: 1, ratio: 1 };
  const pointer = { x: 0, y: 0, inside: false, down: false };
  const lens = { x: 0, y: 0, vx: 0, vy: 0, presence: 0, zoom: 0, ready: false };
  let layoutKey = "";
  let count = 0;
  let focus = (options.intro ?? true) && !reduced ? 0 : 1;
  let raf = 0;
  let last = 0;
  let visible = true;
  let pageVisible = !document.hidden;
  let lost = false;
  let disposed = false;
  let replacement: (() => void) | undefined;

  const strengthOf = (zoom: number) => {
    const base = s.strength >= 0 ? s.strength * 1.2 : s.strength * 0.7;
    return clamp(base * (1 + zoom * 0.6), -0.85, 1.45);
  };

  function resize() {
    const rect = container.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const ratio = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(PIXEL_BUDGET / (width * height)));
    const pixelWidth = Math.max(1, Math.round(width * ratio));
    const pixelHeight = Math.max(1, Math.round(height * ratio));
    if (canvas!.width !== pixelWidth || canvas!.height !== pixelHeight) {
      canvas!.width = pixelWidth;
      canvas!.height = pixelHeight;
    }
    size.width = width;
    size.height = height;
    size.ratio = pixelWidth / width;
    const margin = Math.ceil(lensReach(s.lensRadius, strengthOf(1)) + s.step * 2);
    const area = (width + margin * 2) * (height + margin * 2);
    const step = Math.max(s.step, Math.sqrt(area / MAX_DOTS));
    const key = `${width}|${height}|${step}|${margin}`;
    if (key === layoutKey) return;
    layoutKey = key;
    const dots = buildDots(width, height, step, margin);
    count = dots.length / 4;
    gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer);
    gl!.bufferData(gl!.ARRAY_BUFFER, dots, gl!.STATIC_DRAW);
  }

  function frame(now: number) {
    raf = 0;
    if (lost || disposed) return;
    const dt = clamp((now - last) / 1000 || 0, 0, 0.05);
    last = Math.max(last, now);
    if (focus < 1) focus = Math.min(1, focus + dt / 1.8);

    const tracking = pointer.inside;
    if (tracking && (!lens.ready || lens.presence < 0.01)) {
      lens.x = pointer.x;
      lens.y = pointer.y;
      lens.vx = 0;
      lens.vy = 0;
      lens.ready = true;
    }
    if (lens.ready) {
      const omega = 18;
      const f = 1 + 2 * dt * omega;
      const oo = omega * omega;
      const hoo = dt * oo;
      const hhoo = dt * hoo;
      const inv = 1 / (f + hhoo);
      const nx = (f * lens.x + dt * lens.vx + hhoo * pointer.x) * inv;
      const ny = (f * lens.y + dt * lens.vy + hhoo * pointer.y) * inv;
      lens.vx = (lens.vx + hoo * (pointer.x - lens.x)) * inv;
      lens.vy = (lens.vy + hoo * (pointer.y - lens.y)) * inv;
      lens.x = nx;
      lens.y = ny;
    }
    const presenceTarget = tracking ? 1 : 0;
    lens.presence += (presenceTarget - lens.presence) * (1 - Math.exp(-dt / (tracking ? 0.18 : 0.4)));
    const zoomTarget = tracking && pointer.down ? 1 : 0;
    lens.zoom += (zoomTarget - lens.zoom) * (1 - Math.exp(-dt / 0.14));

    const eased = focus < 0.5 ? 4 * focus * focus * focus : 1 - Math.pow(-2 * focus + 2, 3) / 2;
    const presence = lens.presence * lens.presence * (3 - 2 * lens.presence);
    const extent = Math.abs(size.width * s.direction[0]) + Math.abs(size.height * s.direction[1]);

    const context = gl!;
    const surface = canvas!;
    context.viewport(0, 0, surface.width, surface.height);
    context.clearColor(0, 0, 0, 0);
    context.clear(context.COLOR_BUFFER_BIT);
    context.enable(context.BLEND);
    context.blendFunc(context.ONE, context.ONE_MINUS_SRC_ALPHA);
    context.useProgram(shader!.program);
    context.bindVertexArray(vao);
    const u = shader!.uniforms;
    context.uniform2f(u.uSize, size.width, size.height);
    context.uniform1f(u.uPixel, size.ratio);
    context.uniform1f(u.uRadius, s.radius);
    context.uniform1f(u.uCell, s.step);
    context.uniform4f(u.uLens, lens.x, lens.y, s.lensRadius * (1 + lens.zoom * 0.12), presence);
    context.uniform2f(u.uWarp, strengthOf(lens.zoom), 0);
    context.uniform3f(u.uGlow, s.glowRadius * (1 + lens.zoom * 0.1), s.glowIntensity * (1 + lens.zoom * 0.25), s.light ? 0 : 1);
    context.uniform3f(u.uFrom, s.from[0], s.from[1], s.from[2]);
    context.uniform3f(u.uTo, s.to[0], s.to[1], s.to[2]);
    context.uniform4f(u.uGlowColor, s.glowColor[0], s.glowColor[1], s.glowColor[2], s.glowWeight);
    context.uniform3f(u.uGradient, s.direction[0], s.direction[1], Math.max(extent, 1));
    context.uniform1f(u.uTime, 0);
    context.uniform1f(u.uWave, 0);
    context.uniform1f(u.uSparkle, 0);
    context.uniform1f(u.uFocus, eased);
    context.uniform1f(u.uBase, s.light ? Math.min(1, s.base * 1.3) : s.base);
    context.uniform1f(u.uLight, s.light ? 1 : 0);
    context.uniform1f(u.uOpacity, 1);
    if (count) context.drawArraysInstanced(context.TRIANGLE_STRIP, 0, 4, count);

    const moving = Math.abs(pointer.x - lens.x) + Math.abs(pointer.y - lens.y) > 0.05 || Math.hypot(lens.vx, lens.vy) > 0.5;
    const settling = Math.abs(presenceTarget - lens.presence) > 0.002 || Math.abs(zoomTarget - lens.zoom) > 0.002 || (lens.presence > 0.002 && moving);
    if ((focus < 1 || settling) && visible && pageVisible) raf = requestAnimationFrame(frame);
  }

  function wake() {
    if (raf || lost || disposed || !visible || !pageVisible) return;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  const locate = (event: PointerEvent) => {
    const rect = container.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      inside: event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom,
    };
  };

  const onPointerMove = (event: PointerEvent) => {
    Object.assign(pointer, locate(event));
    wake();
  };
  const onPointerDown = (event: PointerEvent) => {
    Object.assign(pointer, locate(event));
    pointer.down = pointer.inside;
    wake();
  };
  const onLeave = () => {
    pointer.inside = false;
    pointer.down = false;
    wake();
  };
  const onPointerUp = (event: PointerEvent) => {
    pointer.down = false;
    if (event.pointerType !== "mouse") pointer.inside = false;
    wake();
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerDown, { passive: true });
  window.addEventListener("pointerup", onPointerUp, { passive: true });
  window.addEventListener("pointercancel", onPointerUp, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);

  const onLost = (event: Event) => {
    event.preventDefault();
    lost = true;
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const onRestored = () => {
    cleanup();
    replacement = startDotField(container, { ...options, intro: false });
  };
  canvas.addEventListener("webglcontextlost", onLost);
  canvas.addEventListener("webglcontextrestored", onRestored);

  const resizeObserver = new ResizeObserver(() => {
    resize();
    wake();
  });
  resizeObserver.observe(container);
  const intersection = new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    wake();
  });
  intersection.observe(container);
  const onVisibility = () => {
    pageVisible = !document.hidden;
    wake();
  };
  const onMotion = () => {
    reduced = motion.matches;
    if (reduced) focus = 1;
    wake();
  };
  document.addEventListener("visibilitychange", onVisibility);
  motion.addEventListener("change", onMotion);
  const themeObserver = new MutationObserver(() => {
    s.from = readInk("--dot-field-from", "#ad4e71");
    s.to = readInk("--dot-field-to", "#efb4c9");
    wake();
  });
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  resize();
  wake();

  function cleanup() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(raf);
    resizeObserver.disconnect();
    intersection.disconnect();
    themeObserver.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerdown", onPointerDown);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("pointercancel", onPointerUp);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    document.removeEventListener("visibilitychange", onVisibility);
    motion.removeEventListener("change", onMotion);
    canvas!.removeEventListener("webglcontextlost", onLost);
    canvas!.removeEventListener("webglcontextrestored", onRestored);
    if (!gl!.isContextLost()) {
      gl!.deleteBuffer(buffer);
      gl!.deleteVertexArray(vao);
      gl!.deleteProgram(shader!.program);
    }
  }
  return () => {
    cleanup();
    replacement?.();
  };
}
