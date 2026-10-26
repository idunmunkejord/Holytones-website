import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReadMore from "@/components/ReadMore";
import SectionLabel from "@/components/SectionLabel";
import { courses } from "@/lib/site-config";

const storyClass = "space-y-5 text-[15px] leading-[1.75] text-foreground-muted md:text-base";

export const metadata: Metadata = {
  title: "Courses",
  description: "Guided courses and devotionals from YouMatter Academy for a deeper, more honest faith.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="relative aspect-[3/2] overflow-hidden border border-border-soft md:mt-10">
            <Image
              src="/images/courses-sessions.webp"
              alt="Idun in conversation with a small group in a bright living room"
              fill
              priority
              sizes="(min-width: 1152px) 548px, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <SectionLabel>Courses</SectionLabel>
            <h1 className="sr-only">Courses</h1>
            <p className="font-serif-display text-[1.5rem] leading-[1.25] text-foreground md:text-[1.75rem]">
              Your worth is already given. You do not have to spend your life trying to earn it.
            </p>

            <div className={`mt-6 ${storyClass}`}>
              <p>
                During my years as a teacher and principal in upper secondary education, I have
                walked alongside young people facing insecurity, difficult choices and questions
                about who they are. I have seen how deeply the pressure to succeed can affect a
                person, and how much it matters to be heard, supported and reminded of your worth.
              </p>
              <p>
                My own journey has changed the way I approach growth. My Christian faith shapes both
                my understanding of people and the guidance I offer. I believe lasting change begins
                with knowing God and discovering who you are in Christ. From that foundation you can
                recognise the lies shaping your thinking, loosen the grip of performance and take
                meaningful steps forward.
              </p>
            </div>

            <ReadMore className={storyClass}>
              <p>
                As a teacher and mentor, I offer individual and group conversations with space for
                honest questions, practical guidance and biblical reflection. Together we explore
                what is holding you back, what you believe about yourself and how faith can shape
                your everyday choices. I bring energy, honesty and a listening ear. I will encourage
                you, ask questions that challenge you, and help you put insight into practice with
                room for both courage and rest.
              </p>
              <p>
                Having lived in Norway, the United States and Spain, I bring international
                experience and offer conversations in Norwegian, English and Spanish.
              </p>
              <p>
                You are loved by God, your life matters, and you can move forward from a place of
                grace.
              </p>
              <p>
                If this speaks to where you are today, you are welcome to{" "}
                <Link href="/contact" className="link-underline text-accent hover:text-foreground">
                  get in touch
                </Link>
                .
              </p>
            </ReadMore>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="flex flex-col gap-4 border-b border-border-soft py-8 first:pt-0 last:border-b-0 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="font-serif-display text-2xl text-foreground-muted/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-serif-display text-2xl text-foreground">{course.title}</h2>
                {course.details && (
                  <p className="mt-1 text-sm text-foreground-muted">{course.details}</p>
                )}
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground-muted">
                  {course.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
