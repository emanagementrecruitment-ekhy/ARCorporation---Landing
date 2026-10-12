// Langit malam: lapisan bintang, nebula, bulan yang melintas pelan, dan bintang jatuh.
// CSS murni (transform/opacity saja). Posisi bintang dibuat dari generator berbiji tetap,
// jadi hasilnya selalu sama dan tidak ada Math.random saat render.
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function dots(n: number, color: string, seed: number) {
  const r = rng(seed);
  return Array.from({ length: n }, () => `${(r() * 100).toFixed(1)}vw ${(r() * 100).toFixed(1)}vh 0 0 ${color}`).join(",");
}
const LAYERS = {
  a: dots(110, "rgba(255,255,255,.85)", 11),
  b: dots(46, "rgba(255,226,140,.95)", 23),
  c: dots(30, "rgba(200,215,255,.9)", 37),
};

// Bintang 4 sudut: [kiri %, atas %, ukuran px, durasi detik, jeda detik]
const STARS: [number, number, number, number, number][] = [
  [5, 12, 14, 6, 0], [16, 34, 10, 8, 2], [24, 70, 13, 7, 4], [33, 18, 9, 9, 1], [41, 52, 16, 6, 3],
  [52, 84, 10, 8, 5], [60, 9, 12, 7, 0.5], [69, 41, 9, 9, 2.5], [77, 74, 15, 6, 4.5], [88, 26, 11, 8, 1.5],
  [94, 58, 13, 7, 3.5], [10, 88, 11, 9, 0],
];

export function AmbientBackground() {
  return (
    <div aria-hidden className="ambient">
      <div className="neb n1" />
      <div className="neb n2" />
      <div className="neb n3" />
      <i className="dots da" style={{ boxShadow: LAYERS.a }} />
      <i className="dots db" style={{ boxShadow: LAYERS.b }} />
      <i className="dots dc" style={{ boxShadow: LAYERS.c }} />
      {STARS.map(([l, t, s, d, delay], i) => (
        <span key={i} className="star" style={{ left: `${l}%`, top: `${t}%`, width: s, height: s }}>
          <i style={{ animationDuration: `${d}s`, animationDelay: `${delay}s` }} />
        </span>
      ))}
      <div className="moon"><b /></div>
      <span className="shoot sh1" />
      <span className="shoot sh2" />
    </div>
  );
}