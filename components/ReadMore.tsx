"use client";

import { useId, useState } from "react";

// A "Read More ↓ / Read Less ↑" button that smoothly reveals the text passed as children.
// The labels can be changed. `actions` sit on the same row as the button (e.g. a link).
export default function ReadMore({
  children,
  actions,
  className = "",
  moreLabel = "Read More ↓",
  lessLabel = "Read Less ↑",
}: {
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();

  return (
    <>
      <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={moreId}
          onClick={() => setExpanded((open) => !open)}
          className="link-underline text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {expanded ? lessLabel : moreLabel}
        </button>
        {actions}
      </div>

      {/* Collapsed text is inert, so it is hidden from keyboard and screen readers too. */}
      <div
        id={moreId}
        inert={!expanded}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className={`pt-7 ${className}`}>{children}</div>
        </div>
      </div>
    </>
  );
}
