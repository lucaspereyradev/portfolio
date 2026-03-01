"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const EXPERIENCE = [
  {
    role: "Desarrollador Frontend Jr.",
    company: "ÜMA Salud IA",
    period: "Jun. 2023 — Actualidad",
    bullets: [
      "Desarrollo y mantenimiento de interfaces web para una plataforma de salud con IA.",
      "Implementación de nuevas funcionalidades y mejoras de UX en producción.",
      "Colaboración en equipo con metodologías ágiles (SCRUM).",
    ],
  },
]

const STUDIES = [
  {
    institution: "Dev Place",
    degree: "Bootcamp Full Stack en JavaScript",
    year: "Oct. 2022 — Feb. 2023",
  },
  {
    institution: "EEST n°5 'Amancio Williams'",
    degree: "Técnico Informático",
    year: "2015 — 2022",
  },
]

const TECH_STACK = {
  Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  Backend: ["Node.js", "Express", "Python", "Flask", "MySQL", "MongoDB", "Sequelize"],
  Tools: ["Git", "GitHub", "Postman", "jQuery", "Bootstrap", "SASS", "Material UI"],
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

export function About() {
  const { ref, isVisible } = useScrollReveal()
  const { t } = useI18n()

  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto px-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Section heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-emerald rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
              {t.about.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-3">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground max-w-xl leading-relaxed text-pretty">
            {t.about.subtitle}
          </p>
        </div>

        <div className="space-y-20">
          {/* Experience */}
          <div>
            <SectionLabel>{t.about.experience}</SectionLabel>
            <div className="relative space-y-0">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block" />
              {EXPERIENCE.map((item, i) => (
                <div key={i} className="relative md:pl-8 pb-10 last:pb-0 group">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-border group-hover:bg-emerald transition-colors duration-200 -translate-x-[3px] hidden md:block" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-foreground">{item.role}</h3>
                      <span className="text-sm font-medium text-emerald">{item.company}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium shrink-0 mt-0.5">
                      {item.period}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-emerald mt-1 shrink-0">·</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Studies */}
          <div>
            <SectionLabel>{t.about.studies}</SectionLabel>
            <div className="grid md:grid-cols-2 gap-4">
              {STUDIES.map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5 hover:border-emerald/40 transition-colors duration-200"
                >
                  <p className="text-xs text-muted-foreground font-medium mb-1">{item.year}</p>
                  <h3 className="text-sm font-semibold text-foreground mb-1 text-balance leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-xs text-muted-foreground">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <SectionLabel>{t.about.techStack}</SectionLabel>
            <div className="space-y-6">
              {Object.entries(TECH_STACK).map(([group, items]) => (
                <div key={group}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    {group}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium border border-emerald/30 text-emerald rounded-full bg-emerald-light/30 hover:bg-emerald-light/60 hover:border-emerald transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
