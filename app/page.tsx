import SectionLabel from "@/components/SectionLabel";
import CategoryCard from "@/components/CategoryCard";
import MailingList from "@/components/MailingList";
import { categories } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <section className="bg-background-alt px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <SectionLabel>Welcome</SectionLabel>
            <div className="space-y-6 text-base leading-relaxed text-foreground-muted md:text-lg">
              <p>
                Holytones is a creative home for music, books, courses, art, and wellbeing, born
                from a desire to create things that carry meaning and make a difference.
              </p>
              <p>
                Rooted in Christian faith and inspired by Scripture, real life, and the stories we
                carry, Holytones explores truth, beauty, healing, identity, love, and hope through
                different forms of creativity.
              </p>
            </div>

            {/* Full introduction, kept in code for reuse on a future About/Holytones page. */}
            <details className="mt-6">
              <summary className="link-underline w-fit cursor-pointer list-none text-xs uppercase tracking-[0.18em] text-accent transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                Read more
              </summary>
              <div className="mt-6 space-y-6 text-base leading-relaxed text-foreground-muted md:text-lg">
                <p>
                  Some stories are best told through a song.
                  <br />
                  Some need the pages of a book.
                  <br />
                  Some become a journey of learning, reflection, and transformation.
                  <br />
                  Others find their expression through art.
                </p>
                <p>Holytones is where these different forms meet.</p>
                <p>
                  At its heart is a belief that creativity can do more than entertain or decorate.
                  It can tell the truth beautifully. It can give language to things we have
                  struggled to express. It can awaken hope, invite reflection, bring healing,
                  challenge the way we see ourselves and the world, and gently point us back to
                  God.
                </p>
                <p>
                  Much of what is created here grows from Scripture, but also from lived
                  experience: faith and doubt, love and loss, wounds and restoration, questions of
                  identity and purpose, and the quiet ways God meets us in the middle of ordinary
                  life.
                </p>
                <p className="font-medium text-foreground">Different expressions. One heart.</p>
                <p>
                  Music to be felt.
                  <br />
                  Books to be lived with.
                  <br />
                  Courses to grow through.
                  <br />
                  Art to make the unseen visible.
                </p>
                <p className="font-medium text-foreground">
                  Holytones — creativity with meaning, created to make a difference.
                </p>
              </div>
            </details>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section id="mailing-list" className="border-t border-border-soft px-6 py-24 md:px-10 md:py-32">
        <MailingList />
      </section>
    </>
  );
}
