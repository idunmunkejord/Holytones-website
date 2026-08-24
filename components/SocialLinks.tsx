import { links } from "@/lib/site-config";

const items = [
  { key: "spotify", label: "Spotify", href: links.spotify },
  { key: "appleMusic", label: "Apple Music", href: links.appleMusic },
  { key: "youtube", label: "YouTube", href: links.youtube },
];

export default function SocialLinks({
  className = "",
  hide = [],
}: {
  className?: string;
  hide?: string[];
}) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {items
        .filter((item) => !hide.includes(item.key))
        .map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm uppercase tracking-[0.18em] text-foreground-muted transition-colors hover:text-accent"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
