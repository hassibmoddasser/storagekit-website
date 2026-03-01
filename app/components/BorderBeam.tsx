"use client";

export default function BorderBeam({
  size = 80,
  duration = 5,
  delay = 0,
}: {
  size?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      <div
        className="absolute aspect-square animate-border-beam"
        style={
          {
            width: size,
            offsetPath: "rect(0 auto auto 0 round 12px)",
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            "--beam-color": "var(--accent)",
          } as React.CSSProperties
        }
      />
    </div>
  );
}
