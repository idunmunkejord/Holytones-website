"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const bodyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

export default function AuthorHero() {
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();

  return (
    <section className="px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[1fr_15rem] md:gap-14 lg:grid-cols-[1fr_17rem] lg:gap-20">
        <div className="max-w-2xl">
          <h1 className="font-serif-display text-[1.75rem] leading-[1.2] text-foreground md:text-[2.125rem]">
            What if the greatest lie you&apos;ve believed is that everything depends on you?
          </h1>

          <div className={`mt-6 ${bodyClass}`}>
            <p>
              You&apos;ve been told to believe in yourself, trust your feelings, follow your heart,
              and become the best version of who you are. But what if these familiar promises are
              keeping you from discovering the truth that could actually set you free?
            </p>
            <p>
              What if you&apos;ve been looking to yourself for answers that were never meant to come
              from you?
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={moreId}
              onClick={() => setExpanded((open) => !open)}
              className="link-underline text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {expanded ? "Read Less ↑" : "Read More ↓"}
            </button>
            <a
              href="#my-work"
              className="inline-block border border-accent px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
            >
              Explore My Books, Courses &amp; Music
            </a>
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
              <div className={`pt-7 ${bodyClass}`}>
                <p>
                  Perhaps you&apos;ve worked hard to improve yourself, overcome challenges, and
                  create a meaningful life. You&apos;ve learned to take responsibility, develop your
                  abilities, and manage your circumstances, only to discover that there is always
                  something more to achieve, another weakness to overcome, or another part of
                  yourself that supposedly needs fixing. What began as a desire to grow can
                  gradually become an exhausting responsibility to make everything in your life
                  work.
                </p>
                <p>
                  The Christian message offers a radically different starting point. Your value is
                  not something you have to create, your identity is not something you have to
                  invent, and lasting freedom is not something you can manufacture through the
                  right thoughts, habits, or techniques. You were created for a relationship with
                  God, and understanding who He is changes how you understand yourself, your
                  purpose, and the life you have been given.
                </p>
                <p>
                  I&apos;m Idun Munkejord, an author, educator, and creator of Holytones. Through my
                  books, courses, and music, I explore the beliefs that shape your understanding of
                  yourself and the world around you. Drawing on personal experience, years of
                  working with people, and the truth of Scripture, I invite you to question the
                  promises of modern self-help, examine what you have come to believe, and discover
                  the difference between a life built on self-reliance and one rooted in a
                  relationship with God.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[15rem] md:max-w-none">
          <div className="relative">
            {/* Offset frame behind the photo, tying it into the warm palette. */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 bg-background-alt"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
              {siteConfig.authorPhoto ? (
                <Image
                  src={siteConfig.authorPhoto}
                  alt="Idun Munkejord"
                  fill
                  priority
                  quality={95}
                  sizes="(min-width: 1024px) 17rem, 15rem"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-end bg-gradient-to-b from-surface to-accent-soft/40 p-6">
                  <p className="font-serif-display text-xl italic text-foreground-muted">
                    Idun Munkejord
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
