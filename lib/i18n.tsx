"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Locale = "en" | "es" | "pt"

export const LOCALES: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English (US)", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇦🇷" },
  { code: "pt", label: "Português (BR)", flag: "🇧🇷" },
]

export type Translations = typeof translations.en

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      personal: "Personal",
      projects: "Projects",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      tagline: "Full Stack Developer building innovative solutions that prioritize user experience.",
      description:
        "I turn ideas into products that people actually enjoy using. Currently working in health tech, crafting interfaces with React, TypeScript and Next.js.",
      viewProjects: "View Projects",
      contact: "Contact",
      scroll: "Scroll",
      downloadCV: "Download CV",
    },
    about: {
      sectionLabel: "Experience & Skills",
      title: "About Me",
      subtitle:
        "+3 years of experience specializing in building innovative technology solutions that prioritize user experience. Analytical thinker with a Lean mindset and a strong ability to adapt quickly, shaped by work in fast-growing startup environments.",
      experience: "Experience",
      studies: "Studies",
      techStack: "Tech Stack",
    },
    personal: {
      sectionLabel: "Personal",
      title: "Beyond the Code",
      subtitle:
        "A little more about who I am outside of work — what drives me, what I've accomplished, and where I'm headed.",
      interestsLabel: "Interests & Hobbies",
      achievementsLabel: "Achievements",
      goalsLabel: "Future Goals",
      interests: [
        {
          icon: "music",
          title: "Music",
          description:
            "Music is a big part of my life. I love discovering new artists and genres — from electronic to indie. It's how I disconnect and recharge.",
        },
        {
          icon: "camera",
          title: "Photography",
          description:
            "I enjoy capturing everyday moments. Street photography and urban landscapes are my favorite subjects to shoot.",
        },
        {
          icon: "book",
          title: "Reading & Learning",
          description:
            "I'm always learning something new — whether it's a tech concept, a book on psychology, or a deep dive into a topic I'm curious about.",
        },
        {
          icon: "gamepad",
          title: "Gaming",
          description:
            "I love video games — from strategy and RPGs to competitive titles. Gaming helps me unwind and keeps my problem-solving skills sharp.",
        },
      ],
      achievements: [
        {
          year: "2025",
          title: "Frontend Developer at ÜMA Health A.I",
          description:
            "2+ years leading frontend development of healthcare solutions for patients and doctors in Argentina and companies in Mexico.",
        },
        {
          year: "2025",
          title: "Telemedicine Platform",
          description:
            "Developed and shipped key features for a digital clinic for telemedicine, improving load times and increasing user engagement through code optimization.",
        },
        {
          year: "2023",
          title: "Full Stack Bootcamp Graduate",
          description:
            "Completed the Full Stack JavaScript Bootcamp at Constana (Dev Place), gaining hands-on experience building real-world applications.",
        },
        {
          year: "2022",
          title: "Computer Technician Degree",
          description:
            'Earned the Computer Technician degree from E.E.S.T. N°5 "Amancio Williams" after 7 years of technical education in Mar del Plata.',
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Grow to Senior",
          description:
            "I aim to grow into a Senior Full Stack role, leading technical decisions and building products that make a real difference.",
        },
        {
          icon: "write",
          title: "Share Knowledge",
          description:
            "I want to start writing technical articles and sharing what I learn — helping other developers who are on the same path I was.",
        },
        {
          icon: "globe",
          title: "Work Internationally",
          description:
            "I speak Spanish (native), English (B1) and Portuguese (B2). I'd love to collaborate with international teams and work remotely.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projects",
      title: "Selected Work",
      all: "All",
      live: "Live",
      github: "GitHub",
      notDeployed: "Not deployed yet",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Let's Work Together",
      subtitle:
        "Have a project in mind or just want to say hello? My inbox is always open. I'll get back to you as soon as possible.",
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successText: "Thanks for reaching out. I'll respond within 24 hours.",
      sendAnother: "Send another message",
    },
    footer: {
      built: "Built with Next.js & Tailwind CSS",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      personal: "Personal",
      projects: "Proyectos",
      contact: "Contacto",
      downloadCV: "Descargar CV",
    },
    hero: {
      available: "Disponible para oportunidades",
      greeting: "Hola, soy",
      tagline: "Desarrollador Full Stack construyendo soluciones innovadoras que priorizan la experiencia del usuario.",
      description:
        "Convierto ideas en productos que la gente disfruta usar. Actualmente trabajando en health tech, construyendo interfaces con React, TypeScript y Next.js.",
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
      scroll: "Desplazar",
      downloadCV: "Descargar CV",
    },
    about: {
      sectionLabel: "Experiencia y habilidades",
      title: "Sobre mí",
      subtitle:
        "+3 años de experiencia especializado en construir soluciones tecnológicas innovadoras que priorizan la experiencia del usuario. Pensamiento analítico con mentalidad Lean y capacidad de adaptación rápida, forjados en entornos de startups en fase de crecimiento acelerado.",
      experience: "Experiencia",
      studies: "Formación",
      techStack: "Stack Tecnológico",
    },
    personal: {
      sectionLabel: "Personal",
      title: "Más allá del código",
      subtitle:
        "Un poco más sobre quién soy fuera del trabajo — qué me impulsa, qué he logrado y hacia dónde voy.",
      interestsLabel: "Intereses y Hobbies",
      achievementsLabel: "Logros",
      goalsLabel: "Metas futuras",
      interests: [
        {
          icon: "music",
          title: "Música",
          description:
            "La música es una parte importante de mi vida. Me encanta descubrir nuevos artistas y géneros — desde electrónica hasta indie. Es mi forma de desconectarme y recargar energías.",
        },
        {
          icon: "camera",
          title: "Fotografía",
          description:
            "Disfruto capturar momentos cotidianos. La fotografía callejera y los paisajes urbanos son mis temas favoritos para fotografiar.",
        },
        {
          icon: "book",
          title: "Lectura y Aprendizaje",
          description:
            "Siempre estoy aprendiendo algo nuevo — ya sea un concepto de tecnología, un libro de psicología o un tema que me genera curiosidad.",
        },
        {
          icon: "gamepad",
          title: "Gaming",
          description:
            "Me encantan los videojuegos — desde estrategia y RPGs hasta títulos competitivos. El gaming me ayuda a desconectar y mantiene mis habilidades de resolución de problemas activas.",
        },
      ],
      achievements: [
        {
          year: "2025",
          title: "Desarrollador Frontend en ÜMA Health A.I",
          description:
            "2+ años liderando el desarrollo frontend de soluciones de salud para pacientes y médicos en Argentina y empresas de México.",
        },
        {
          year: "2025",
          title: "Plataforma de Telemedicina",
          description:
            "Desarrollé y entregué features clave para un consultorio digital de telemedicina, mejorando tiempos de carga y aumentando el engagement de usuarios mediante optimización de código.",
        },
        {
          year: "2023",
          title: "Egresado del Bootcamp Full Stack",
          description:
            "Completé el Bootcamp de JavaScript Full Stack en Constana (Dev Place), construyendo aplicaciones reales con tecnologías modernas.",
        },
        {
          year: "2022",
          title: "Título de Técnico en Informática",
          description:
            'Obtuve el título de Técnico en Informática en la E.E.S.T. N°5 "Amancio Williams" tras 7 años de formación técnica en Mar del Plata.',
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Crecer a Senior",
          description:
            "Mi objetivo es crecer hacia un rol de Full Stack Senior, liderando decisiones técnicas y construyendo productos que generen un impacto real.",
        },
        {
          icon: "write",
          title: "Compartir Conocimiento",
          description:
            "Quiero empezar a escribir artículos técnicos y compartir lo que aprendo — ayudando a otros desarrolladores que están en el mismo camino.",
        },
        {
          icon: "globe",
          title: "Trabajar Internacionalmente",
          description:
            "Hablo Español (nativo), Inglés (B1) y Portugués (B2). Me gustaría colaborar con equipos internacionales y trabajar de forma remota.",
        },
      ],
    },
    projects: {
      sectionLabel: "Proyectos",
      title: "Trabajo Seleccionado",
      all: "Todos",
      live: "En vivo",
      github: "GitHub",
      notDeployed: "Sin deploy por el momento",
    },
    contact: {
      sectionLabel: "Contacto",
      title: "Trabajemos Juntos",
      subtitle:
        "¿Tenés un proyecto en mente o simplemente querés saludar? Mi bandeja de entrada siempre está abierta. Te responderé lo antes posible.",
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@ejemplo.com",
      message: "Mensaje",
      messagePlaceholder: "Contame sobre tu proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successText: "Gracias por escribirme. Responderé en menos de 24 horas.",
      sendAnother: "Enviar otro mensaje",
    },
    footer: {
      built: "Construido con Next.js y Tailwind CSS",
    },
  },

  pt: {
    nav: {
      home: "Início",
      about: "Sobre mim",
      personal: "Pessoal",
      projects: "Projetos",
      contact: "Contato",
      downloadCV: "Baixar CV",
    },
    hero: {
      available: "Disponível para oportunidades",
      greeting: "Olá, sou",
      tagline: "Desenvolvedor Full Stack construindo soluções inovadoras que priorizam a experiência do usuário.",
      description:
        "Transformo ideias em produtos que as pessoas realmente gostam de usar. Atualmente trabalhando em health tech, construindo interfaces com React, TypeScript e Next.js.",
      viewProjects: "Ver Projetos",
      contact: "Contato",
      scroll: "Rolar",
      downloadCV: "Baixar CV",
    },
    about: {
      sectionLabel: "Experiência e habilidades",
      title: "Sobre mim",
      subtitle:
        "+3 anos de experiência especializando em construir soluções tecnológicas inovadoras que priorizam a experiência do usuário. Pensamento analítico com mentalidade Lean e forte capacidade de adaptação, moldados por ambientes de startups em crescimento acelerado.",
      experience: "Experiência",
      studies: "Formação",
      techStack: "Stack Tecnológico",
    },
    personal: {
      sectionLabel: "Pessoal",
      title: "Além do Código",
      subtitle:
        "Um pouco mais sobre quem sou fora do trabalho — o que me motiva, o que conquistei e para onde estou indo.",
      interestsLabel: "Interesses e Hobbies",
      achievementsLabel: "Conquistas",
      goalsLabel: "Metas Futuras",
      interests: [
        {
          icon: "music",
          title: "Música",
          description:
            "A música é uma parte importante da minha vida. Adoro descobrir novos artistas e gêneros — do eletrônico ao indie. É como me desconecto e recarrego as energias.",
        },
        {
          icon: "camera",
          title: "Fotografia",
          description:
            "Gosto de capturar momentos cotidianos. Fotografia de rua e paisagens urbanas são meus temas favoritos para fotografar.",
        },
        {
          icon: "book",
          title: "Leitura e Aprendizado",
          description:
            "Estou sempre aprendendo algo novo — seja um conceito de tecnologia, um livro de psicologia ou um tema que me desperta curiosidade.",
        },
        {
          icon: "gamepad",
          title: "Gaming",
          description:
            "Adoro videogames — de estratégia e RPGs a títulos competitivos. O gaming me ajuda a relaxar e mantém minhas habilidades de resolução de problemas afiadas.",
        },
      ],
      achievements: [
        {
          year: "2025",
          title: "Desenvolvedor Frontend na ÜMA Health A.I",
          description:
            "2+ anos liderando o desenvolvimento frontend de soluções de saúde para pacientes e médicos na Argentina e empresas no México.",
        },
        {
          year: "2025",
          title: "Plataforma de Telemedicina",
          description:
            "Desenvolvi e entreguei features-chave para um consultório digital de telemedicina, melhorando tempos de carregamento e aumentando o engajamento dos usuários por meio de otimização de código.",
        },
        {
          year: "2023",
          title: "Formado no Bootcamp Full Stack",
          description:
            "Concluí o Bootcamp de JavaScript Full Stack na Constana (Dev Place), construindo aplicações reais com tecnologias modernas.",
        },
        {
          year: "2022",
          title: "Diploma de Técnico em Informática",
          description:
            'Obtive o diploma de Técnico em Informática na E.E.S.T. N°5 "Amancio Williams" após 7 anos de formação técnica em Mar del Plata.',
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Crescer a Sênior",
          description:
            "Meu objetivo é crescer para um cargo de Full Stack Sênior, liderando decisões técnicas e construindo produtos com impacto real.",
        },
        {
          icon: "write",
          title: "Compartilhar Conhecimento",
          description:
            "Quero começar a escrever artigos técnicos e compartilhar o que aprendo — ajudando outros desenvolvedores no mesmo caminho.",
        },
        {
          icon: "globe",
          title: "Trabalhar Internacionalmente",
          description:
            "Falo Espanhol (nativo), Inglês (B1) e Português (B2). Gostaria de colaborar com equipes internacionais e trabalhar remotamente.",
        },
      ],
    },
    projects: {
      sectionLabel: "Projetos",
      title: "Trabalho Selecionado",
      all: "Todos",
      live: "Ao Vivo",
      github: "GitHub",
      notDeployed: "Sem deploy por enquanto",
    },
    contact: {
      sectionLabel: "Contato",
      title: "Vamos Trabalhar Juntos",
      subtitle:
        "Tem um projeto em mente ou só quer dizer olá? Minha caixa de entrada está sempre aberta. Responderei o mais rápido possível.",
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@exemplo.com",
      message: "Mensagem",
      messagePlaceholder: "Me fale sobre o seu projeto...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      successTitle: "Mensagem Enviada!",
      successText: "Obrigado por entrar em contato. Responderei em até 24 horas.",
      sendAnother: "Enviar outra mensagem",
    },
    footer: {
      built: "Construído com Next.js e Tailwind CSS",
    },
  },
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")
  const t = translations[locale]

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}
