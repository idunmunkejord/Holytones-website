import Image from "next/image";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";

const bodyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

export default function AuthorHero() {
  return (
    <section className="border-b border-border-soft bg-background-alt px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative aspect-[1672/941] overflow-hidden border border-border-soft md:mt-10">
          <Image
            src="/images/home-hero.webp"
            alt="A woman at her desk with her head in her hand, looking weary"
            fill
            priority
            sizes="(min-width: 1152px) 548px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <SectionLabel>Home</SectionLabel>
          <h1 className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
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

          <ReadMore
            className={bodyClass}
            actions={
              <a
                href="#my-work"
                className="inline-block border border-accent px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-background"
              >
                Explore Books, Courses &amp; Music
              </a>
            }
          >
            <p>
              Perhaps you&apos;ve worked hard to improve yourself, overcome challenges, and create a
              meaningful life. You&apos;ve learned to take responsibility, develop your abilities,
              and manage your circumstances, only to discover that there is always something more
              to achieve, another weakness to overcome, or another part of yourself that supposedly
              needs fixing. What began as a desire to grow can gradually become an exhausting
              responsibility to make everything in your life work.
            </p>
            <p>
              The Christian message offers a radically different starting point. Your value is not
              something you have to create, your identity is not something you have to invent, and
              lasting freedom is not something you can manufacture through the right thoughts,
              habits, or techniques. You were created for a relationship with God, and
              understanding who He is changes how you understand yourself, your purpose, and the
              life you have been given.
            </p>
          </ReadMore>
        </div>
      </div>
    </section>
  );
}
