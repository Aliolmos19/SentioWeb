import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'SENTIO DESK - Escritorio Inteligente Educativo',
  description: 'Revolucionando el aprendizaje con tecnología: escritorio digital interactivo con monitoreo biométrico y comunicación profesor-alumno.',
  keywords: 'educación, tecnología, escritorio inteligente, Raspberry Pi, biométrico, aprendizaje digital',
  authors: [{ name: 'Equipo SENTIO DESK' }],
  openGraph: {
    title: 'SENTIO DESK - Escritorio Inteligente Educativo',
    description: 'Revolucionando el aprendizaje con tecnología: escritorio digital interactivo con monitoreo biométrico y comunicación profesor-alumno.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
