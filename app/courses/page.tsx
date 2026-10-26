import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { courses } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Courses",
  description: "Guided courses and devotionals from YouMatter Academy for a deeper, more honest faith.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="border-b border-border-soft bg-background-alt px-6 pt-14 pb-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Courses</SectionLabel>
          <h1 className="sr-only">Courses</h1>
          <p className="max-w-xl text-base leading-relaxed text-foreground-muted">
            Guided courses and devotionals for women seeking a deeper, more honest faith — built
            through YouMatter Academy.
          </p>
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
                <p className="mt-1 text-sm text-foreground-muted">
                  {course.language} · {course.modules}
                </p>
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
