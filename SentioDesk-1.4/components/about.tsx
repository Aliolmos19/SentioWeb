import { Badge } from '@/components/ui/badge'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 })

  const technologies = [
    'Raspberry Pi', 'Pantalla Infrarroja', 'Sensores Biométricos', 
    'Python', 'JavaScript', 'Node.js'
  ]

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
            Acerca del Proyecto
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 delay-300 ${
              sectionVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
              <span className="relative z-10">Transformando el espacio educativo tradicional</span>
              <span className={`absolute bottom-0 left-0 h-3 bg-blue-400/30 transition-all duration-1000 delay-500 ${
                contentVisible ? 'w-full' : 'w-0'
              }`}></span>
            </h3>
            
            {[
              "El Escritorio Inteligente Educativo es una innovadora solución que reemplaza el mobiliario tradicional por una estación de trabajo digital interactiva, integrando tecnología de punta para mejorar la experiencia educativa.",
              "Este sistema combina una pantalla infrarroja sensible al tacto con una Raspberry Pi que ejecuta un software especializado, simulando la organización de una carpeta física pero con las ventajas del mundo digital.",
              "Adicionalmente, incorpora una pulsera biométrica que monitorea constantemente los signos vitales del estudiante, enviando estos datos a una aplicación exclusiva para el profesor, permitiendo una comunicación más efectiva y un seguimiento del bienestar del alumno."
            ].map((text, index) => (
              <p 
                key={index}
                className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                  contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                {text}
              </p>
            ))}

            <div className={`pt-4 transition-all duration-1000 delay-1000 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className={`bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-500 hover:scale-105 ${
                      contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-400 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
              <img
                src="/placeholder.svg?height=400&width=600&text=Escritorio+Inteligente"
                alt="Escritorio Inteligente Educativo"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
