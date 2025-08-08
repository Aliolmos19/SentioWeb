import { Monitor, Github, Twitter, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SENTIO DESK</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Revolucionando la educación con tecnología inteligente. 
              Escritorio digital interactivo para el futuro del aprendizaje.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-blue-400 hover:bg-slate-800"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {[
                { id: 'about', label: 'Acerca de' },
                { id: 'hardware', label: 'Hardware' },
                { id: 'features', label: 'Funciones' },
                { id: 'team', label: 'Equipo' },
                { id: 'contact', label: 'Contacto' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400">
              <p>Córdoba, Argentina</p>
              <p>sentio.desk@gmail.com</p>
              <p>+54 351 9876 5432</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; 2025 Escritorio Inteligente Educativo. Todos los derechos reservados.
            </p>
            <p className="text-gray-400">
              Proyecto de Tesina - CESD
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
