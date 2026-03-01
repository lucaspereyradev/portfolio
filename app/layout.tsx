import type { Metadata } from "next"
import { Onest } from "next/font/google"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lucas Pereyra — Full Stack Developer",
  description:
    "Portafolio de Lucas Pereyra, Desarrollador Full Stack especializado en JavaScript, React, TypeScript y Node.js.",
  keywords: ["Lucas Pereyra", "Full Stack Developer", "React", "TypeScript", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Lucas Pereyra", url: "https://github.com/lucaspereyradev" }],
  openGraph: {
    title: "Lucas Pereyra — Full Stack Developer",
    description:
      "Portafolio de Lucas Pereyra, Desarrollador Full Stack especializado en JavaScript, React, TypeScript y Node.js.",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={onest.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
