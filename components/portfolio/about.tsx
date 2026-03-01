"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useI18n } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const EXPERIENCE = [
  {
    role: {
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
      pt: "Desenvolvedor Frontend",
    },
    company: "ÜMA Health A.I",
    companyUrl: "https://www.linkedin.com/company/umahealthai/",
    period: {
      es: "Jun. 2023 — Presente · CABA, Argentina",
      en: "Jun. 2023 — Present · CABA, Argentina",
      pt: "Jun. 2023 — Presente · CABA, Argentina",
    },
    bullets: {
      es: [
        "Liderar el desarrollo frontend de varias soluciones de salud que benefician a pacientes y médicos en Argentina y empresas de México.",
        "Colaborar estrechamente con diseñadores UX/UI y stakeholders para garantizar que la aplicación cumpla las expectativas de los usuarios.",
        "Desarrollar e implementar scripts de pruebas automatizadas para optimizar los procesos de testing.",
        "Implementar sistemas de métricas y análisis de datos (PostHog) para monitorear rendimiento y experiencia del usuario.",
        "Reducción de costos en Google Cloud Run mediante optimización de recursos en arquitectura de microservicios.",
      ],
      en: [
        "Lead the frontend development of multiple healthcare solutions benefiting patients and doctors in Argentina and companies in Mexico.",
        "Work closely with UX/UI designers and key stakeholders to ensure the application meets user needs.",
        "Develop and implement automated testing scripts to optimize testing processes.",
        "Implement metrics and data analytics systems (PostHog) to monitor performance and user experience.",
        "Reduced costs in Google Cloud Run by optimizing resources within the microservices architecture.",
      ],
      pt: [
        "Liderar o desenvolvimento frontend de várias soluções de saúde que beneficiam pacientes e médicos na Argentina e empresas no México.",
        "Colaborar com designers UX/UI e stakeholders para garantir que a aplicação atenda às necessidades dos usuários.",
        "Desenvolver e implementar scripts de testes automatizados para otimizar os processos de testing.",
        "Implementar sistemas de métricas e análise de dados (PostHog) para monitorar desempenho e experiência do usuário.",
        "Redução de custos no Google Cloud Run por meio de otimização de recursos na arquitetura de microsserviços.",
      ],
    },
  },
]

const STUDIES = [
  {
    institution: "Constana (Dev Place)",
    degree: {
      es: "Desarrollador Full Stack JavaScript",
      en: "Full Stack JavaScript Developer",
      pt: "Desenvolvedor Full Stack JavaScript",
    },
    year: {
      es: "Sep. 2022 — Feb. 2023 · Buenos Aires",
      en: "Sep. 2022 — Feb. 2023 · Buenos Aires",
      pt: "Set. 2022 — Fev. 2023 · Buenos Aires",
    },
  },
  {
    institution: 'E.E.S.T. N°5 "Amancio Williams"',
    degree: {
      es: "Técnico en Informática",
      en: "Computer Technician",
      pt: "Técnico em Informática",
    },
    year: {
      es: "Mar. 2015 — Feb. 2022 · Mar del Plata",
      en: "Mar. 2015 — Feb. 2022 · Mar del Plata",
      pt: "Mar. 2015 — Fev. 2022 · Mar del Plata",
    },
  },
]

const TECH_STACK = {
  "Languages & Frameworks": [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Nest.js",
    "Node.js",
    "Python",
  ],
  "Cloud & Tools": [
    "Firebase",
    "Google Cloud Platform",
    "PostHog",
    "Git",
    "GitHub",
    "Scrum / Agile",
  ],
  "Styling & Other": [
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Redux",
    "GraphQL",
    "REST APIs",
    "Automated Testing",
  ],
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
  const { t, locale } = useI18n()

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
                      <h3 className="text-base font-semibold text-foreground">
                        {item.role[locale]}
                      </h3>
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-emerald hover:underline"
                      >
                        {item.company}
                      </a>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium shrink-0 mt-0.5">
                      {item.period[locale]}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {item.bullets[locale].map((b, j) => (
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
                  <p className="text-xs text-muted-foreground font-medium mb-1">
                    {item.year[locale]}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground mb-1 text-balance leading-snug">
                    {item.degree[locale]}
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
