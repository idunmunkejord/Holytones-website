"use client";

import { useId, useTransition } from "react";
import { useRouter } from "next/navigation";
import type { Lang } from "@/lib/i18n";
import { setLang } from "@/lib/set-lang";

// Drawn as SVG because Windows shows flag emoji as plain letters. The menu has a switcher for
// wide screens and one for phones, so the clip path needs an id of its own in each.
function UkFlag() {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" aria-hidden>
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function NorwayFlag() {
  return (
    <svg viewBox="0 0 22 16" className="h-full w-full" aria-hidden>
      <rect width="22" height="16" fill="#BA0C2F" />
      <path d="M0,8 h22 M8,0 v16" stroke="#fff" strokeWidth="4" />
      <path d="M0,8 h22 M8,0 v16" stroke="#00205B" strokeWidth="2" />
    </svg>
  );
}

const options: { lang: Lang; label: string; Flag: () => React.JSX.Element }[] = [
  { lang: "en", label: "English", Flag: UkFlag },
  { lang: "no", label: "Norsk", Flag: NorwayFlag },
];

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function choose(next: Lang) {
    if (next === lang || pending) return;
    startTransition(async () => {
      await setLang(next);
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Language / Språk">
      {options.map(({ lang: option, label, Flag }) => {
        const active = option === lang;
        return (
          <button
            key={option}
            type="button"
            onClick={() => choose(option)}
            aria-label={label}
            aria-pressed={active}
            title={label}
            className={`block h-[18px] w-[27px] overflow-hidden rounded-[2px] ring-offset-2 ring-offset-background transition ${
              active ? "ring-2 ring-accent-gold" : "opacity-50 hover:opacity-100"
            }`}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
}
