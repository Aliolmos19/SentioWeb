'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg translate-y-0' : 'bg-transparent translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 animate-fade-in-left">
              <Monitor className="h-8 w-8 text-blue-400 animate-spin-slow" />
              <span className="text-xl font-bold">SENTIO DESK</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block animate-fade-in-right">
              <div className="ml-10 flex items-baseline space-x-8">
                {['about', 'hardware', 'features', 'team', 'contact'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-white hover:text-blue-300 px-3 py-2 text-sm font-medium transition-all duration-300 capitalize relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item === 'about' ? 'Acerca de' : 
                     item === 'hardware' ? 'Hardware' :
                     item === 'features' ? 'Funciones' :
                     item === 'team' ? 'Equipo' : 'Contacto'}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden animate-fade-in-right">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-amber-400 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6 animate-spin" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-slate-900/95 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['about', 'hardware', 'features', 'team', 'contact'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-amber-400 block px-3 py-2 text-base font-medium w-full text-left capitalize transition-all duration-300 hover:bg-white/10 rounded-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item === 'about' ? 'Acerca de' : 
                 item === 'hardware' ? 'Hardware' :
                 item === 'features' ? 'Funciones' :
                 item === 'team' ? 'Equipo' : 'Contacto'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            <span className="inline-block animate-slide-in-left">Escritorio</span>{' '}
            <span className="inline-block animate-slide-in-right animation-delay-200">Inteligente</span>
            <span className="block text-blue-300 animate-fade-in-up animation-delay-400">Educativo</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Revolucionando el aprendizaje con tecnología: escritorio digital interactivo 
            con monitoreo biométrico y comunicación profesor-alumno.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-800">
            <Button
              onClick={() => scrollToSection('team')}
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Conoce al Equipo
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-slate-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>
    </header>
  )
}
