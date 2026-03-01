import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Personal } from "@/components/portfolio/personal"
import { Projects } from "@/components/portfolio/projects"
import { Contact, Footer } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <I18nProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Personal />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  )
}
