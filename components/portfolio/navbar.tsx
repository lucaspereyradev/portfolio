"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useI18n, LOCALES, type Locale } from "@/lib/i18n"

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function LanguageSelector() {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LOCALES.find((l) => l.code === locale)!

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-emerald/50 rounded-lg transition-all duration-200"
      >
        <GlobeIcon />
        <span>{current.label.split(" ")[0]}</span>
        <ChevronDownIcon />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 top-full mt-1.5 w-44 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50 py-1"
        >
          {LOCALES.map((loc) => (
            <li
              key={loc.code}
              role="option"
              aria-selected={locale === loc.code}
              onClick={() => {
                setLocale(loc.code as Locale)
                setOpen(false)
              }}
              className={cn(
                "flex items-center gap-2.5 px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150",
                locale === loc.code
                  ? "bg-emerald-light/50 text-emerald font-medium"
                  : "text-foreground hover:bg-surface"
              )}
            >
              <span aria-hidden="true" className="text-base">{loc.flag}</span>
              <span>{loc.label}</span>
              {locale === loc.code && (
                <svg aria-hidden="true" className="w-3.5 h-3.5 ml-auto text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Navbar() {
  const { t, locale } = useI18n()
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  const NAV_LINKS = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.personal, href: "#personal" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const CV_HREFS: Record<string, string> = {
    es: "/cv/cv-es-lucaspereyra.pdf",
    en: "/cv/cv-en-lucaspereyra.pdf",
    pt: "/cv/cv-br-lucaspereyra.pdf",
  }

  const cvHref = CV_HREFS[locale] ?? "/cv/cv-es-lucaspereyra.pdf"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ["home", "about", "personal", "projects", "contact"]
      let current = "home"
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100) current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-semibold tracking-tight text-foreground hover:text-emerald transition-colors duration-200 shrink-0 flex items-baseline gap-0.5"
        >
          <span className="text-lg">&lt;</span>
          <span className="text-lg">lukedev</span>
          <span className="text-lg text-emerald">/</span>
          <span className="text-lg">&gt;</span>
        </a>

        {/* Center links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "")
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 pb-1",
                    isActive
                      ? "text-emerald"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <LanguageSelector />
          <a
            href={cvHref}
            download
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald text-emerald-foreground text-xs font-medium rounded-lg hover:bg-emerald/90 transition-colors duration-200"
          >
            <DownloadIcon />
            {t.nav.downloadCV}
          </a>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm overflow-x-auto">
        <div className="flex items-center gap-4 px-6 py-2 min-w-max">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium whitespace-nowrap transition-colors duration-200 py-1",
                activeSection === link.href.replace("#", "")
                  ? "text-emerald"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
