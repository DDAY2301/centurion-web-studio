export default function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ef]">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#e1eadd] blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 sm:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#416b59]">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-.07em] text-[#293b34] sm:text-7xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-9 text-[#53675d]">{description}</p>
      </div>
    </section>
  );
}
