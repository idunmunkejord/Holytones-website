import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Holytones for booking, press, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-20 pb-16 md:px-10 md:pt-28">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="font-serif-display text-5xl text-foreground md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground-muted">
            Booking requests, press inquiries, collaborations, or just a note to say hello — all
            welcome.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-4xl gap-16 md:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="space-y-10">
            <div>
              <SectionLabel>Direct</SectionLabel>
              <a
                href={`mailto:${links.email}`}
                className="link-underline font-serif-display text-2xl text-foreground"
              >
                {links.email}
              </a>
            </div>

            <div>
              <SectionLabel>Follow along</SectionLabel>
              <SocialLinks className="flex-col gap-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
