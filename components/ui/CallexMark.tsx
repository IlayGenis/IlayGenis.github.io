// The Callex logo mark, as published on callex.co.il (built by Ilay); the
// rounded bars are drawn in currentColor so it takes the surrounding ink.
export function CallexMark() {
  const bars: [number, number, number][] = [
    [57, 247, 18], [91, 238, 36], [125, 222, 68], [159, 198, 116], [193, 166, 180],
    [227, 126, 260], [261, 88, 336], [295, 72, 368], [329, 72, 112], [363, 78, 96],
    [397, 92, 76], [431, 116, 54], [465, 148, 30], [329, 328, 112], [363, 338, 96],
    [397, 344, 76], [431, 342, 54], [465, 334, 30],
  ];
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true" fill="currentColor">
      {bars.map(([x, y, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="18" height={h} rx="9" />
      ))}
    </svg>
  );
}
