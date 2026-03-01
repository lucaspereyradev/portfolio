"use client"

import { useI18n } from "@/lib/i18n"

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function Hero() {
  const { t, locale } = useI18n()

  const CV_HREFS: Record<string, string> = {
    es: "/cv/cv-es-lucaspereyra.pdf",
    en: "/cv/cv-en-lucaspereyra.pdf",
    pt: "/cv/cv-es-lucaspereyra.pdf",
  }

  const cvHref = CV_HREFS[locale] ?? "/cv/cv-es-lucaspereyra.pdf"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Decorative emerald shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Status chip */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald inline-block" />
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              {t.hero.available}
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up-delay-1 text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance leading-tight mb-6">
            {t.hero.greeting}{" "}
            <span className="text-emerald">Lucas Pereyra</span>.
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up-delay-2 text-xl md:text-2xl font-semibold text-foreground/80 mb-4 text-balance leading-snug">
            {t.hero.tagline}
          </p>

          {/* Description */}
          <p className="animate-fade-in-up-delay-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10 text-pretty">
            {t.hero.description}
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-4 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-emerald-foreground font-medium rounded-lg text-sm hover:bg-emerald/90 transition-colors duration-200 shadow-sm"
            >
              {t.hero.viewProjects}
              <ArrowRightIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg text-sm hover:border-emerald hover:text-emerald transition-colors duration-200"
            >
              {t.hero.contact}
            </a>
            <a
              href={cvHref}
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-emerald/30 text-emerald font-medium rounded-lg text-sm hover:bg-emerald-light/40 hover:border-emerald transition-all duration-200"
            >
              <DownloadIcon />
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
          <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
            {t.hero.scroll}
          </span>
          <ChevronDownIcon />
        </div>
      </div>
    </section>
  )
}
