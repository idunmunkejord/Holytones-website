// A code-generated ocean horizon, used as a placeholder hero image.
// Swap this component's contents for a real photo (e.g. an <Image> from /public)
// whenever one is ready — see the comment near the bottom of this file.

export default function OceanHero({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7f1e6" />
            <stop offset="60%" stopColor="#e3e9e4" />
            <stop offset="100%" stopColor="#c3d5d4" />
          </linearGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a9c0c1" />
            <stop offset="12%" stopColor="#7ea0a4" />
            <stop offset="50%" stopColor="#527279" />
            <stop offset="100%" stopColor="#2f484e" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="26%" r="26%">
            <stop offset="0%" stopColor="#fdf6e6" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#fdf6e6" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1440" height="260" fill="url(#sky)" />
        <rect x="0" y="260" width="1440" height="460" fill="url(#sea)" />
        <rect x="0" y="0" width="1440" height="720" fill="url(#sun)" />
        <rect x="0" y="255" width="1440" height="6" fill="#fdf6e6" opacity="0.5" />

        <g opacity="0.3" stroke="#f4efe2" strokeWidth="2" fill="none">
          <path d="M0 320 Q 360 300 720 320 T 1440 320" />
          <path d="M0 390 Q 360 365 720 390 T 1440 390" />
          <path d="M0 470 Q 360 445 720 470 T 1440 470" />
          <path d="M0 560 Q 360 535 720 560 T 1440 560" />
          <path d="M0 650 Q 360 625 720 650 T 1440 650" />
        </g>
      </svg>
    </div>
  );
}
