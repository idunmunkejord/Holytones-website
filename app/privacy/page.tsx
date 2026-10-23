import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { company, links } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Holytones handles your personal information.",
};

const headingClass = "font-serif-display text-2xl text-foreground";

export default function PrivacyPage() {
  return (
    <section className="px-6 py-14 md:px-10 md:py-20">
      <div className="mx-auto max-w-2xl">
        <SectionLabel>Privacy</SectionLabel>
        <h1 className="font-serif-display text-[1.875rem] leading-[1.2] text-foreground md:text-[2.375rem]">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-8 text-[15px] leading-[1.75] text-foreground-muted md:text-base">
          <div className="space-y-3">
            <h2 className={headingClass}>Who is responsible</h2>
            <p>
              This website is run by {company.name}, org. no. {company.orgNumber}, which is
              responsible for the personal information collected through it. You can contact me at{" "}
              <a href={`mailto:${links.email}`} className="link-underline text-accent">
                {links.email}
              </a>
              .
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={headingClass}>The weekly devotional</h2>
            <p>
              When you subscribe to the weekly devotional, you sign up directly with Substack, the
              service that publishes and sends it. Your email address is stored by Substack, not by
              this website, and is used only to send you the devotional and related updates from
              Holytones. Substack&apos;s handling of your information is described in its{" "}
              <a
                href="https://substack.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-accent"
              >
                privacy policy
              </a>
              . Every email includes a link to unsubscribe whenever you wish.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={headingClass}>The contact form</h2>
            <p>
              When you send a message through the contact form, your name, email address, and
              message are delivered to my inbox by email so that I can reply to you. They are not
              used for anything else or added to any mailing list.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={headingClass}>Hosting and security</h2>
            <p>
              The website is hosted by Cloudflare, which processes technical information such as
              your IP address to deliver the site and protect it against abuse. The site does not
              use advertising or tracking cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className={headingClass}>Your rights</h2>
            <p>
              You can ask to see, correct, or delete the personal information I hold about you by
              writing to{" "}
              <a href={`mailto:${links.email}`} className="link-underline text-accent">
                {links.email}
              </a>
              . If you believe your information has been handled incorrectly, you can also contact
              the Norwegian Data Protection Authority (Datatilsynet).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
