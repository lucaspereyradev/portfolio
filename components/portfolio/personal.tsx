"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

function MountainIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 20l5.5-8 3.5 5 2.5-3.5L20 20H3z" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" strokeWidth={1.75} />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function MusicIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  )
}

function WriteIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg aria-hidden="true" className="w-4 h-4 text-emerald shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3h14M5 3a2 2 0 00-2 2v1c0 3.866 2.239 7.481 6 9.32V17H7v2h10v-2h-2v-1.68c3.761-1.839 6-5.454 6-9.32V5a2 2 0 00-2-2" />
    </svg>
  )
}

const ICON_MAP: Record<string, React.ReactNode> = {
  mountain: <MountainIcon />,
  camera: <CameraIcon />,
  book: <BookIcon />,
  music: <MusicIcon />,
  rocket: <RocketIcon />,
  write: <WriteIcon />,
  globe: <GlobeIcon />,
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="w-8 h-0.5 bg-emerald rounded-full" />
      <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
        {children}
      </span>
    </div>
  )
}

export function Personal() {
  const { ref, isVisible } = useScrollReveal()
  const { t } = useI18n()
  const p = t.personal

  return (
    <section id="personal" className="bg-background py-24 md:py-32">
      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto px-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
              {p.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3 text-balance">
            {p.title}
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
            {p.subtitle}
          </p>
        </div>

        <div className="space-y-20">
          {/* Interests */}
          <div>
            <SectionLabel>{p.interestsLabel}</SectionLabel>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {p.interests.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "bg-surface border border-border rounded-xl p-5 hover:border-emerald/40 hover:shadow-sm transition-all duration-300",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  )}
                  style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-light/40 text-emerald flex items-center justify-center mb-4">
                    {ICON_MAP[item.icon]}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <SectionLabel>{p.achievementsLabel}</SectionLabel>
            <div className="grid sm:grid-cols-2 gap-4">
              {p.achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-surface border border-border rounded-xl p-5 hover:border-emerald/40 transition-colors duration-200"
                >
                  <div className="shrink-0 flex flex-col items-center gap-1.5 pt-0.5">
                    <TrophyIcon />
                    <span className="text-xs font-bold text-emerald">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Goals */}
          <div>
            <SectionLabel>{p.goalsLabel}</SectionLabel>
            <div className="grid md:grid-cols-3 gap-4">
              {p.goals.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-surface border border-border rounded-xl p-6 hover:border-emerald/40 hover:shadow-sm transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald/5 rounded-bl-[4rem] group-hover:bg-emerald/10 transition-colors duration-300" />
                  <div className="w-9 h-9 rounded-lg bg-emerald-light/40 text-emerald flex items-center justify-center mb-4">
                    {ICON_MAP[item.icon]}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
