export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </p>
  );
}
