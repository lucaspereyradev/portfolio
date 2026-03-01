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
      tagline: "Full Stack Developer building fast, modern web experiences.",
      description:
        "I craft pixel-perfect interfaces and scalable backends with React, TypeScript, Node.js and more. Passionate about clean code, performance and turning ideas into real products.",
      viewProjects: "View Projects",
      contact: "Contact",
      scroll: "Scroll",
      downloadCV: "Download CV",
    },
    about: {
      sectionLabel: "Experience & Skills",
      title: "About Me",
      subtitle:
        "I'm a Full Stack Developer focused on JavaScript and its ecosystem. I care about clean code, good UX and building things that actually work.",
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
          icon: "mountain",
          title: "Sports & Outdoor",
          description:
            "I enjoy outdoor activities and sports. Moving around helps me stay focused and energized for work.",
        },
      ],
      achievements: [
        {
          year: "2023",
          title: "Junior Frontend Developer",
          description:
            "Joined ÜMA Salud IA as a Junior Frontend Developer, working on production-level healthcare web applications.",
        },
        {
          year: "2023",
          title: "Full Stack Bootcamp Graduate",
          description:
            "Completed the intensive Full Stack JavaScript Bootcamp at Dev Place, gaining hands-on experience with the MERN stack.",
        },
        {
          year: "2022",
          title: "Technician Degree",
          description:
            "Earned the IT Technician degree from EEST n°5 'Amancio Williams' after 7 years of technical education.",
        },
        {
          year: "2022",
          title: "First Full Stack Project",
          description:
            "Built and deployed my first complete full stack application — CryptoWallet — using React, Node.js and MySQL.",
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Senior Developer",
          description:
            "I aim to grow into a Senior Full Stack role, leading projects and contributing to architectural decisions that make a real impact.",
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
            "I'd love to collaborate with international teams and eventually work remotely from different parts of the world.",
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
      tagline: "Desarrollador Full Stack construyendo experiencias web rápidas y modernas.",
      description:
        "Creo interfaces pixel-perfect y backends escalables con React, TypeScript, Node.js y más. Apasionado por el código limpio, el rendimiento y transformar ideas en productos reales.",
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
      scroll: "Desplazar",
      downloadCV: "Descargar CV",
    },
    about: {
      sectionLabel: "Experiencia y habilidades",
      title: "Sobre mí",
      subtitle:
        "Soy un Desarrollador Full Stack enfocado en JavaScript y su ecosistema. Me importa el código limpio, una buena UX y construir cosas que realmente funcionen.",
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
          icon: "mountain",
          title: "Deporte y Actividades al Aire Libre",
          description:
            "Disfruto las actividades al aire libre y los deportes. Moverme me ayuda a mantenerme enfocado y con energía para el trabajo.",
        },
      ],
      achievements: [
        {
          year: "2023",
          title: "Desarrollador Frontend Jr.",
          description:
            "Me sumé a ÜMA Salud IA como Desarrollador Frontend Jr., trabajando en aplicaciones web de salud a nivel productivo.",
        },
        {
          year: "2023",
          title: "Egresado del Bootcamp Full Stack",
          description:
            "Completé el intensivo Bootcamp de JavaScript Full Stack en Dev Place, adquiriendo experiencia práctica con el stack MERN.",
        },
        {
          year: "2022",
          title: "Título de Técnico",
          description:
            "Obtuve el título de Técnico Informático en la EEST n°5 'Amancio Williams' tras 7 años de formación técnica.",
        },
        {
          year: "2022",
          title: "Primer Proyecto Full Stack",
          description:
            "Construí y desplegué mi primera aplicación full stack completa — CryptoWallet — usando React, Node.js y MySQL.",
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Desarrollador Senior",
          description:
            "Mi objetivo es crecer hacia un rol de Full Stack Senior, liderando proyectos y participando en decisiones de arquitectura que tengan impacto real.",
        },
        {
          icon: "write",
          title: "Compartir Conocimiento",
          description:
            "Quiero empezar a escribir artículos técnicos y compartir lo que aprendo — ayudando a otros desarrolladores que están en el camino que yo recorrí.",
        },
        {
          icon: "globe",
          title: "Trabajar Internacionalmente",
          description:
            "Me gustaría colaborar con equipos internacionales y eventualmente trabajar de forma remota desde distintas partes del mundo.",
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
      tagline: "Desenvolvedor Full Stack criando experiências web rápidas e modernas.",
      description:
        "Crio interfaces pixel-perfect e backends escaláveis com React, TypeScript, Node.js e muito mais. Apaixonado por código limpo, performance e transformar ideias em produtos reais.",
      viewProjects: "Ver Projetos",
      contact: "Contato",
      scroll: "Rolar",
      downloadCV: "Baixar CV",
    },
    about: {
      sectionLabel: "Experiência e habilidades",
      title: "Sobre mim",
      subtitle:
        "Sou um Desenvolvedor Full Stack focado em JavaScript e seu ecossistema. Me importo com código limpo, boa UX e construir coisas que realmente funcionam.",
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
          icon: "mountain",
          title: "Esporte e Atividades ao Ar Livre",
          description:
            "Gosto de atividades ao ar livre e esportes. Me movimentar me ajuda a manter o foco e a energia para o trabalho.",
        },
      ],
      achievements: [
        {
          year: "2023",
          title: "Desenvolvedor Frontend Jr.",
          description:
            "Entrei na ÜMA Salud IA como Desenvolvedor Frontend Jr., trabalhando em aplicações web de saúde em nível produtivo.",
        },
        {
          year: "2023",
          title: "Formado no Bootcamp Full Stack",
          description:
            "Concluí o intensivo Bootcamp de JavaScript Full Stack na Dev Place, adquirindo experiência prática com a stack MERN.",
        },
        {
          year: "2022",
          title: "Diploma de Técnico",
          description:
            "Obtive o diploma de Técnico em Informática na EEST n°5 'Amancio Williams' após 7 anos de formação técnica.",
        },
        {
          year: "2022",
          title: "Primeiro Projeto Full Stack",
          description:
            "Construí e publiquei minha primeira aplicação full stack completa — CryptoWallet — usando React, Node.js e MySQL.",
        },
      ],
      goals: [
        {
          icon: "rocket",
          title: "Desenvolvedor Sênior",
          description:
            "Meu objetivo é crescer para um cargo de Full Stack Sênior, liderando projetos e participando de decisões arquiteturais com impacto real.",
        },
        {
          icon: "write",
          title: "Compartilhar Conhecimento",
          description:
            "Quero começar a escrever artigos técnicos e compartilhar o que aprendo — ajudando outros desenvolvedores que estão no mesmo caminho que eu percorri.",
        },
        {
          icon: "globe",
          title: "Trabalhar Internacionalmente",
          description:
            "Gostaria de colaborar com equipes internacionais e, eventualmente, trabalhar remotamente de diferentes partes do mundo.",
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
