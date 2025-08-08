import { Monitor, Cpu, Heart, Wifi } from 'lucide-react'
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/use-scroll-animation'

export default function Hardware() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: specsRef, visibleItems } = useStaggeredAnimation(4, 200)
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.3 })

  const specs = [
    {
      icon: Monitor,
      title: 'Pantalla Táctil Infrarroja',
      description: 'Pantalla de 32" con tecnología infrarroja para una interacción precisa, resistente al uso intensivo en ambientes educativos.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cpu,
      title: 'Raspberry Pi 4',
      description: 'Potente computadora de placa reducida que ejecuta nuestro sistema operativo educativo personalizado.',
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: Heart,
      title: 'Pulsera Biométrica',
      description: 'Dispositivo wearable que monitorea frecuencia cardíaca, temperatura y niveles de estrés, enviando datos en tiempo real.',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Wifi,
      title: 'Conexión Inalámbrica',
      description: 'Comunicación WiFi y Bluetooth de bajo consumo para sincronización constante con la plataforma del profesor.',
      color: 'from-gray-500 to-gray-600'
    }
  ]

  return (
    <section id="hardware" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 relative">
            Componentes Hardware
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 delay-300 ${
              sectionVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`transition-all duration-1000 delay-200 ${
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 relative">
                <span className="relative z-10">Tecnología integrada para la educación</span>
                <span className={`absolute bottom-0 left-0 h-3 bg-blue-400/30 transition-all duration-1000 delay-500 ${
                  sectionVisible ? 'w-full' : 'w-0'
                }`}></span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro escritorio inteligente está construido con componentes de última 
                generación que trabajan en armonía para crear una experiencia educativa 
                sin precedentes.
              </p>
            </div>

            <div ref={specsRef} className="space-y-6">
              {specs.map((spec, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-10'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <spec.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {spec.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-600 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/placeholder.svg?height=500&width=600&text=Hardware+Components"
                alt="Componentes del Escritorio Inteligente"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated tech indicators */}
              <div className="absolute top-6 left-6 flex space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-400"></div>
              </div>
              
              {/* Floating circuit pattern */}
              <div className="absolute bottom-6 right-6 w-16 h-16 opacity-20">
                <div className="w-full h-full border-2 border-blue-400 rounded-lg animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-blue-300 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
