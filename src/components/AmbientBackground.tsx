// Latar animasi seluruh halaman. CSS murni (transform/opacity saja), tanpa JS.
// Posisi bintang dibuat tetap (bukan acak) supaya hasil render konsisten.
const SPARKS: [number, number, number, number][] = [
  // [kiri %, atas %, durasi detik, jeda detik]
  [6, 18, 7, 0], [14, 72, 9, 2], [22, 38, 8, 4], [31, 85, 10, 1], [38, 12, 7, 3],
  [47, 58, 9, 5], [55, 28, 8, 0.5], [63, 78, 10, 2.5], [71, 16, 7, 4.5], [79, 48, 9, 1.5],
  [86, 88, 8, 3.5], [93, 30, 10, 0], [10, 50, 8, 6], [27, 62, 9, 3], [51, 92, 7, 5.5],
  [68, 40, 10, 1], [83, 66, 8, 4], [96, 10, 9, 2],
];

// Bintang berbentuk bintang 4 sudut: [kiri %, atas %, ukuran px, durasi detik, jeda detik]
const STARS: [number, number, number, number, number][] = [
  [4, 9, 16, 6, 0], [12, 28, 10, 8, 2], [19, 62, 14, 7, 4], [27, 16, 9, 9, 1], [34, 46, 18, 6, 3],
  [42, 80, 11, 8, 5], [49, 7, 13, 7, 0.5], [58, 35, 9, 9, 2.5], [66, 68, 17, 6, 4.5], [74, 22, 11, 8, 1.5],
  [81, 55, 15, 7, 3.5], [89, 40, 10, 9, 0], [95, 76, 14, 6, 5], [8, 90, 12, 8, 2], [60, 94, 10, 7, 6],
];

export function AmbientBackground() {
  return (
    <div aria-hidden className="ambient">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
      <div className="sweep" />
      <div className="orbit o1" />
      <div className="orbit o2" />
      <div className="moon"><i /></div>
      {STARS.map(([l, t, s, d, delay], i) => (
        <span key={`s${i}`} className="star" style={{ left: `${l}%`, top: `${t}%`, width: s, height: s }}>
          <i style={{ animationDuration: `${d}s`, animationDelay: `${delay}s` }} />
        </span>
      ))}
      <span className="shoot sh1" />
      <span className="shoot sh2" />
      {SPARKS.map(([l, t, d, delay], i) => (
        <span
          key={i}
          className="spark"
          style={{ left: `${l}%`, top: `${t}%`, animationDuration: `${d}s`, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}