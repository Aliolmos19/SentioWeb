import { FolderOpen, Heart, MessageCircle, Book, TrendingUp, Shield } from 'lucide-react'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation'

export default function Features() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: featuresRef, visibleItems } = useStaggeredAnimation(6, 150)

  const features = [
    {
      icon: FolderOpen,
      title: 'Organización Digital',
      description: 'Interfaz que simula una carpeta física pero con las ventajas de lo digital: búsqueda instantánea, etiquetado automático y acceso rápido.',
      gradient: 'from-blue-400 to-blue-500',
      hoverGradient: 'group-hover:from-blue-500 group-hover:to-blue-600'
    },
    {
      icon: Heart,
      title: 'Monitoreo Biométrico',
      description: 'Pulsera que registra datos vitales del estudiante, permitiendo al profesor detectar situaciones de estrés o falta de atención.',
      gradient: 'from-slate-400 to-slate-500',
      hoverGradient: 'group-hover:from-slate-500 group-hover:to-slate-600'
    },
    {
      icon: MessageCircle,
      title: 'Comunicación Directa',
      description: 'Sistema de mensajería integrado entre profesor y alumno para consultas privadas sin interrumpir la clase.',
      gradient: 'from-blue-500 to-blue-600',
      hoverGradient: 'group-hover:from-blue-600 group-hover:to-blue-700'
    },
    {
      icon: Book,
      title: 'Acceso a Materiales',
      description: 'Todos los recursos educativos organizados y accesibles desde la interfaz del escritorio digital.',
      gradient: 'from-gray-400 to-gray-500',
      hoverGradient: 'group-hover:from-gray-500 group-hover:to-gray-600'
    },
    {
      icon: TrendingUp,
      title: 'Seguimiento de Progreso',
      description: 'Herramientas para que el estudiante visualice su avance y el profesor identifique áreas de oportunidad.',
      gradient: 'from-blue-300 to-blue-400',
      hoverGradient: 'group-hover:from-blue-400 group-hover:to-blue-500'
    },
    {
      icon: Shield,
      title: 'Modo Examen',
      description: 'Función especial que limita el acceso a recursos durante evaluaciones, garantizando la integridad académica.',
      gradient: 'from-slate-500 to-slate-600',
      hoverGradient: 'group-hover:from-slate-600 group-hover:to-slate-700'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
            Funcionalidades Clave
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 delay-300 ${
              sectionVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
        </div>

        <div ref={featuresRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} ${feature.hoverGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
