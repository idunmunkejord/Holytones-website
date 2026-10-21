import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function AuthorHero() {
  return (
    <section className="px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-20">
        <div>
          <h1 className="font-serif-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            What if the greatest lie you&apos;ve believed is that everything depends on you?
          </h1>

          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-foreground-muted md:text-lg">
            <p>
              You&apos;ve been told to believe in yourself, trust your feelings, follow your heart,
              and become the best version of who you are. You&apos;ve been encouraged to think
              positively, take control of your future, and believe that the power to change your
              life lies within you. These ideas are so deeply embedded in modern culture that you
              may never have stopped to question them. Yet despite all the advice about happiness,
              success, and personal growth, you may still find yourself struggling with insecurity,
              exhaustion, and the feeling that you are somehow not enough.
            </p>
            <p>
              Perhaps you&apos;ve worked hard to improve yourself, overcome challenges, and create a
              meaningful life. You&apos;ve learned to take responsibility, develop your abilities,
              and manage your circumstances, only to discover that there is always something more
              to achieve, another weakness to overcome, or another part of yourself that supposedly
              needs fixing. What began as a desire to grow can gradually become an exhausting
              responsibility to make everything in your life work.
            </p>
            <p>
              But what if the problem isn&apos;t that you haven&apos;t tried hard enough? What if
              you&apos;ve been looking to yourself for answers that were never meant to come from
              you?
            </p>
            <p>
              The Christian message offers a radically different starting point. Your value is not
              something you have to create, your identity is not something you have to invent, and
              lasting freedom is not something you can manufacture through the right thoughts,
              habits, or techniques. You were created for a relationship with God, and
              understanding who He is changes how you understand yourself, your purpose, and the
              life you have been given.
            </p>
            <p>
              I&apos;m Idun Munkejord, an author, educator, and creator of Holytones. Through my
              books, courses, and music, I explore the beliefs that shape your understanding of
              yourself and the world around you. Drawing on personal experience, years of working
              with people, and the truth of Scripture, I invite you to question the promises of
              modern self-help, examine what you have come to believe, and discover the difference
              between a life built on self-reliance and one rooted in a relationship with God.
            </p>
          </div>

          <a
            href="#my-work"
            className="mt-10 inline-block border border-accent px-8 py-3 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Explore My Books, Courses &amp; Music
          </a>
        </div>

        <div className="mx-auto w-full max-w-sm lg:sticky lg:top-36 lg:mt-2 lg:max-w-none">
          <div className="relative">
            {/* Offset frame behind the photo, tying it into the warm palette. */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 bg-background-alt md:translate-x-6 md:translate-y-6"
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
                  sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-end bg-gradient-to-b from-surface to-accent-soft/40 p-8">
                  <p className="font-serif-display text-2xl italic text-foreground-muted">
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
