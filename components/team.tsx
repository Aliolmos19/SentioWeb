import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation'

export default function Team() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: teamRef, visibleItems } = useStaggeredAnimation(6, 200)

  const teamMembers = [
    {
      name: 'Alina Olmos',
      role: 'Líder del Proyecto. Desarrolladora de hardware',
      position: 'CTO',
      image: '/images/alina-olmos.jpg',
      responsibilities: [
        'Coordinación general del equipo',
        'Gestión de tiempos y entregables',
        'Desarrolladora de hardware',
        'Integración de componentes',
        'Diseñadora Industrial',
        'Programación de la Raspberry Pi',
        'Programación en PYTHON',
        'Diseño de interfaz del escritorio',
        'Pruebas de usabilidad',
        'Prototipado interactivo'
      ],
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      name: 'Salvador Zumstein',
      role: 'Sub Líder. Desarrollador Principal',
      position: 'CTO',
      image: '/images/salvador-zumstein.jpg',
      responsibilities: [
        'Programación de la Raspberry Pi',
        'Desarrollo del sistema operativo',
        'Integración de sensores',
        'Optimización de rendimiento',
        'Diseño de interfaz del escritorio'
      ],
      gradient: 'from-slate-400 to-slate-500'
    },
    {
      name: 'Cismar Cedeño',
      role: 'Diseñadora UX/UI',
      position: 'CEO',
      image: '/images/cismar-cedeno.jpg',
      responsibilities: [
        'Directora del area de marketing',
        'Diseñadora visual',
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Santina Bar',
      role: 'Desarrolladora Backend',
      position: 'Ingeniera en Computación',
      image: '/images/santina-bar.jpg',
      responsibilities: [
        'Desarrollo de la API',
        'Conexión con base de datos',
        'Sincronización de datos biométricos',
        'Sistema de mensajería'
      ],
      gradient: 'from-blue-300 to-blue-400'
    },
    {
      name: 'Joaquin Castro',
      role: 'Especialista en Educación',
      position: 'Pedagogo Tecnológico',
      image: '/placeholder.svg?height=300&width=300&text=Joaquin+Castro',
      responsibilities: [
        'Diseño de flujos educativos',
        'Pruebas en contexto real',
        'Capacitación para profesores',
        'Documentación pedagógica'
      ],
      gradient: 'from-slate-500 to-slate-600'
    },
    {
      name: 'Donato Giordano',
      role: 'Especialista en Testing y QA',
      position: 'Quality Assurance Engineer',
      image: '/placeholder.svg?height=300&width=300&text=Donato+Giordano',
      responsibilities: [
        'Testing de funcionalidades',
        'Control de calidad del software',
        'Pruebas de usabilidad',
        'Documentación de bugs',
        'Validación de requisitos'
      ],
      gradient: 'from-blue-600 to-blue-700'
    }
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
            Nuestro Equipo
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 delay-300 ${
              sectionVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
          <p className={`text-xl text-gray-600 mb-4 transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            Conoce a los 6 integrantes que hicieron posible este proyecto innovador
          </p>
        </div>

        <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 overflow-hidden relative ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating role badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0`}>
                  {member.position}
                </div>
              </div>
              
              <div className="p-6 relative z-10">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-2 group-hover:bg-blue-200 transition-colors duration-300">
                    {member.role}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {member.position}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Responsabilidades:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {member.responsibilities.slice(0, 3).map((responsibility, idx) => (
                      <li key={idx} className="flex items-start group-hover:text-gray-700 transition-colors duration-300">
                        <span className={`w-1.5 h-1.5 bg-gradient-to-r ${member.gradient} rounded-full mt-2 mr-2 flex-shrink-0`}></span>
                        {responsibility}
                      </li>
                    ))}
                    {member.responsibilities.length > 3 && (
                      <li className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                        +{member.responsibilities.length - 3} más...
                      </li>
                    )}
                  </ul>
                </div>
                
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
