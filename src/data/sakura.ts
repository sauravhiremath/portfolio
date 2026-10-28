// Sprite anchors, bloom timing, and page-wide petal settings.
export const sakuraSprites = [
  { name: "front", box: "42 830 268 255", anchor: [127, 143] },
  { name: "side", box: "365 831 234 247", anchor: [13, 220] },
  { name: "pair", box: "635 832 310 253", anchor: [171, 223] },
  { name: "opening", box: "950 878 275 197", anchor: [149, 173] },
  { name: "bud", box: "120 1100 90 127", anchor: [12, 112] },
] as const;

type SpriteName = typeof sakuraSprites[number]["name"];

export function sakuraPlacement(name: SpriteName, size: number) {
  const sprite = sakuraSprites.find((sprite) => sprite.name === name)!;
  const [, , width, height] = sprite.box.split(" ").map(Number);
  const scale = size / Math.max(width, height);
  return {
    x: -sprite.anchor[0] * scale,
    y: -sprite.anchor[1] * scale,
    width: width * scale,
    height: height * scale,
  };
}

function bloomTiming(x: number, y: number, index: number) {
  const delay = 0.05 + (x + y) / 3400 + (index % 3) * 0.04;
  const duration = 0.55 + (((index * 37) % 10) / 10) * 0.45;
  return { delay, duration: Math.min(duration, 1.5 - delay) };
}

export const sakuraFlowers = ([
  [250, 101, 91, -22, "side"],
  [282, 128, 76, 18, "front"],
  [311, 111, 55, -30, "opening"],
  [319, 177, 91, 12, "pair"],
  [140, 204, 81, -16, "front"],
  [111, 241, 65, 24, "side"],
  [120, 293, 66, -24, "pair"],
  [430, 177, 69, -35, "side"],
  [465, 281, 62, 28, "front"],
  [595, 170, 82, -18, "pair"],
  [633, 110, 43, -12, "side"],
  [666, 230, 64, 20, "side"],
  [738, 177, 39, 20, "opening"],
  [782, 266, 89, -15, "pair"],
  [815, 329, 66, 17, "front"],
  [965, 247, 67, 24, "opening"],
  [1039, 215, 57, -10, "side"],
  [1092, 236, 53, 25, "front"],
  [277, 384, 105, -20, "pair"],
  [327, 420, 87, 18, "front"],
  [389, 393, 70, -28, "side"],
  [365, 480, 61, 32, "opening"],
  [526, 431, 90, -20, "pair"],
  [572, 480, 98, 22, "front"],
  [615, 437, 82, -9, "side"],
  [658, 504, 84, 15, "pair"],
  [573, 556, 59, -22, "side"],
  [763, 568, 96, 8, "pair"],
  [820, 574, 68, -15, "front"],
  [781, 672, 59, 25, "side"],
  [886, 650, 84, -22, "pair"],
  [974, 686, 59, 25, "opening"],
  [181, 440, 96, -25, "side"],
  [137, 460, 89, 12, "pair"],
  [211, 529, 98, -8, "front"],
  [251, 562, 79, 28, "side"],
  [180, 637, 98, -13, "pair"],
  [210, 690, 69, 30, "front"],
  [199, 737, 84, -20, "pair"],
  [239, 789, 48, 15, "side"],
] as const).map(([x, y, size, angle, sprite], index) => ({
  x, y, angle, sprite,
  placement: sakuraPlacement(sprite, size),
  ...bloomTiming(x, y, index),
}));

export const sakuraBuds = [
  [70, 286, -40], [416, 373, 65], [516, 307, 50], [690, 312, 15],
  [747, 166, 65], [856, 410, 10], [1065, 191, 30], [1153, 222, 45],
  [1180, 244, 65], [1048, 307, 110], [455, 530, 90], [701, 461, 60],
  [911, 564, 65], [820, 752, 150], [1083, 714, 100], [310, 613, 70],
  [122, 700, -30], [166, 812, 160],
].map(([x, y, angle], index) => ({ x, y, angle, ...bloomTiming(x, y, index + 7) }));

export const sakuraPetals = [
  { x: 8, duration: 23, delay: -5, drift: 52, size: 17, rest: 18 },
  { x: 22, duration: 28, delay: -19, drift: -38, size: 13, rest: 67 },
  { x: 35, duration: 25, delay: -10, drift: 65, size: 19, rest: 38 },
  { x: 48, duration: 30, delay: -25, drift: -55, size: 15, rest: 82 },
  { x: 61, duration: 26, delay: -7, drift: 46, size: 17, rest: 25 },
  { x: 73, duration: 29, delay: -17, drift: -62, size: 14, rest: 57 },
  { x: 84, duration: 24, delay: -11, drift: 35, size: 18, rest: 44 },
  { x: 93, duration: 31, delay: -23, drift: -42, size: 13, rest: 73 },
];
