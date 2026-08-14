import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-serif-display text-4xl text-foreground md:text-5xl">
          This page went quiet.
        </h1>
        <p className="mt-4 text-foreground-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="link-underline mt-8 inline-block text-xs uppercase tracking-[0.2em] text-foreground-muted hover:text-foreground"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
