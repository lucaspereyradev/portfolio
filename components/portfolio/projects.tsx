"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useI18n } from "@/lib/i18n"

type Category = "All" | "Frontend" | "Fullstack"

const PROJECTS = [
  {
    name: "Portfolio",
    description:
      "Mi portafolio personal construido con React y TailwindCSS. Animaciones con Framer Motion, soporte multiidioma (ES/EN/PT) y diseño responsivo.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    category: "Frontend" as Category,
    live: "https://lucaspereyradev.github.io/portfolio/",
    github: "https://github.com/lucaspereyradev/portfolio",
  },
  {
    name: "DevCoin",
    description:
      "Plataforma de seguimiento de criptomonedas en tiempo real con autenticación, cartera personalizada y gráficos interactivos.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    category: "Fullstack" as Category,
    live: "",
    github: "https://github.com/lucaspereyradev/DevCoin",
  },
  {
    name: "WeatherMe",
    description:
      "Aplicación del clima con búsqueda por ciudad, pronóstico extendido y diseño adaptativo según las condiciones meteorológicas.",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    category: "Frontend" as Category,
    live: "",
    github: "https://github.com/lucaspereyradev/WeatherMe",
  },
  {
    name: "TuTienda E-commerce",
    description:
      "Tienda online completa con catálogo de productos, carrito de compras, panel de administración y sistema de autenticación.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL", "Sequelize"],
    category: "Fullstack" as Category,
    live: "",
    github: "https://github.com/lucaspereyradev/e-commerce",
  },
  {
    name: "CryptoWallet",
    description:
      "Billetera cripto con seguimiento de activos, historial de transacciones y visualización de precios en tiempo real.",
    tech: ["React", "Tailwind CSS", "Node.js", "MySQL"],
    category: "Fullstack" as Category,
    live: "",
    github: "https://github.com/lucaspereyradev/CryptoWallet",
  },
]

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Projects() {
  const { t } = useI18n()
  const [filter, setFilter] = useState<Category>("All")
  const { ref, isVisible } = useScrollReveal()

  const FILTERS: { key: Category; label: string }[] = [
    { key: "All", label: t.projects.all },
    { key: "Frontend", label: "Frontend" },
    { key: "Fullstack", label: "Fullstack" },
  ]

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div
        ref={ref}
        className={cn(
          "max-w-5xl mx-auto px-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-emerald rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
                {t.projects.sectionLabel}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {t.projects.title}
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "px-4 py-1.5 text-xs font-medium rounded-full border transition-all duration-200",
                  filter === f.key
                    ? "bg-emerald text-emerald-foreground border-emerald"
                    : "border-border text-muted-foreground hover:border-emerald/50 hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.name}
              className={cn(
                "group relative flex flex-col bg-card border border-border rounded-xl p-6 hover:border-emerald/40 hover:shadow-md transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              )}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
            >
              {/* Category badge */}
              <span className="self-start mb-4 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-light/40 text-emerald border border-emerald/20">
                {project.category}
              </span>

              {/* Emerald top border on hover */}
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-emerald rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <h3 className="text-base font-semibold text-foreground mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 text-pretty">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded-md bg-surface text-muted-foreground font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 mt-auto">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald text-emerald-foreground text-xs font-medium rounded-lg hover:bg-emerald/90 transition-colors duration-200"
                  >
                    <ExternalLinkIcon />
                    {t.projects.live}
                  </a>
                ) : (
                  <span className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-muted text-muted-foreground text-xs font-medium rounded-lg cursor-not-allowed opacity-50">
                    <ExternalLinkIcon />
                    {t.projects.live}
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-border text-foreground text-xs font-medium rounded-lg hover:border-emerald/40 hover:text-emerald transition-colors duration-200"
                >
                  <GitHubIcon />
                  {t.projects.github}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
