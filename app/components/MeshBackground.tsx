export function MeshBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Gold radial — top right */}
      <div
        className="absolute -right-32 -top-32 h-[640px] w-[640px] rounded-full opacity-[0.32] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(184,137,58,0.55), transparent 70%)",
        }}
      />

      {/* Warm rose radial — left mid */}
      <div
        className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-[0.28] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(196,148,108,0.45), transparent 70%)",
        }}
      />

      {/* Deep navy whisper — bottom right */}
      <div
        className="absolute -bottom-40 right-10 h-[560px] w-[560px] rounded-full opacity-[0.16] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(15,26,46,0.6), transparent 70%)",
        }}
      />

      {/* Fine grain overlay for premium texture */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>\")",
        }}
      />
    </div>
  );
}
