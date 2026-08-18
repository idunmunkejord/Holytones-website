// Hero background for the homepage.
//
// `photoSrc` should be a real photograph — a wide, calm ocean horizon at
// sunrise or early morning, soft warm natural light, clean and Nordic
// rather than dark or dramatic. Once a real photo is ready, drop it into
// /public/images (e.g. hero-ocean.jpg) and pass its path here:
// <OceanHero photoSrc="/images/hero-ocean.jpg" />.
// Until then this falls back to a code-generated ocean-horizon gradient in
// the same warm, calm palette so the layout previews correctly.

import Image from "next/image";

export default function OceanHero({
  className = "",
  photoSrc,
}: {
  className?: string;
  photoSrc?: string;
}) {
  if (photoSrc) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
        <Image
          src={photoSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_68%]"
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbe9d3" />
            <stop offset="45%" stopColor="#f5ddc4" />
            <stop offset="75%" stopColor="#e7d9c6" />
            <stop offset="100%" stopColor="#cfd8d2" />
          </linearGradient>
          <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cdb99b" />
            <stop offset="10%" stopColor="#9fb2ac" />
            <stop offset="45%" stopColor="#6f9092" />
            <stop offset="100%" stopColor="#3a5a5f" />
          </linearGradient>
          <radialGradient id="sun" cx="50%" cy="30%" r="30%">
            <stop offset="0%" stopColor="#fff3dc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff3dc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe8bf" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ffe8bf" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1440" height="270" fill="url(#sky)" />
        <rect x="0" y="270" width="1440" height="450" fill="url(#sea)" />
        <rect x="0" y="0" width="1440" height="720" fill="url(#sun)" />
        <rect x="0" y="200" width="1440" height="220" fill="url(#glow)" />
        <rect x="0" y="266" width="1440" height="6" fill="#fff6e3" opacity="0.6" />

        <g opacity="0.28" stroke="#fff6e3" strokeWidth="2" fill="none">
          <path d="M0 330 Q 360 310 720 330 T 1440 330" />
          <path d="M0 400 Q 360 375 720 400 T 1440 400" />
          <path d="M0 480 Q 360 455 720 480 T 1440 480" />
          <path d="M0 570 Q 360 545 720 570 T 1440 570" />
          <path d="M0 660 Q 360 635 720 660 T 1440 660" />
        </g>
      </svg>
    </div>
  );
}
