'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Youtube, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function Contact() {
  const { toast } = useToast()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.3 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación básica del lado del cliente
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "❌ Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log('🔄 Enviando formulario...', formData)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log('📧 Respuesta del servidor:', data)

      if (response.ok) {
        setSubmitStatus('success')
        toast({
          title: "✅ ¡Mensaje enviado exitosamente!",
          description: "Gracias por contactarnos. Te responderemos a sentioarg@gmail.com pronto.",
        })
        
        // Limpiar formulario
        setFormData({ name: '', email: '', institution: '', message: '' })
        
        // Reset status después de 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        throw new Error(data.error || 'Error desconocido al enviar mensaje')
      }
    } catch (error) {
      console.error('❌ Error en handleSubmit:', error)
      setSubmitStatus('error')
      toast({
        title: "❌ Error al enviar mensaje",
        description: error instanceof Error ? error.message : "Error desconocido. Inténtalo de nuevo.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactItems = [
    { icon: MapPin, text: 'Córdoba, Argentina', color: 'text-blue-400' },
    { icon: Mail, text: 'sentioarg@gmail.com', color: 'text-blue-300' },
    { icon: Phone, text: '+54 351 9876 5432', color: 'text-slate-300' }
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', color: 'hover:bg-violet-700' },
    { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-500' },
    { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Youtube, label: 'YouTube', color: 'hover:bg-red-600' }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-blue-300/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative">
            Contacto
            <span className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-white rounded-full transition-all duration-1000 delay-300 ${
              sectionVisible ? 'w-24' : 'w-0'
            }`}></span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-2xl font-bold mb-4 relative">
                <span className="relative z-10">¿Interesado en implementar nuestro sistema?</span>
                <span className={`absolute bottom-0 left-0 h-3 bg-blue-400/30 transition-all duration-1000 delay-500 ${
                  sectionVisible ? 'w-full' : 'w-0'
                }`}></span>
              </h3>
              <p className="text-gray-200 leading-relaxed mb-8">
                Estamos disponibles para demostraciones, implementaciones en instituciones 
                educativas o colaboraciones de investigación. Todos los mensajes se envían directamente a nuestro equipo.
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-500 group ${
                    sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <span className="text-lg group-hover:text-blue-200 transition-colors duration-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className={`pt-8 transition-all duration-1000 delay-1000 ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <h4 className="text-lg font-semibold mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    

                    onClick={() => {social.label === "Instagram" ? (window.open("https://www.instagram.com/sentio.ar?igsh=MWd5dmlzZmpkZXBjNw==")) : (window.open("https://www.google.com"))}}

                    className={`border-white/20 text-black ${social.color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                     
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div 
            ref={formRef}
            className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1000 delay-400 relative ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Status indicator */}
            {submitStatus !== 'idle' && (
              <div className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                submitStatus === 'success' 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-red-500 animate-bounce'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-white" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-white" />
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre completo', required: true },
                { id: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu.email@ejemplo.com', required: true },
                { id: 'institution', label: 'Institución', type: 'text', placeholder: 'Nombre de tu institución (opcional)', required: false }
              ].map((field, index) => (
                <div 
                  key={field.id}
                  className={`transition-all duration-700 ${
                    formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                    {field.label} {field.required && <span className="text-red-300">*</span>}
                  </label>
                  <Input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required={field.required}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-white/40 transition-all duration-300 disabled:opacity-50"
                  />
                </div>
              ))}
              
              <div className={`transition-all duration-700 ${
                formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`} style={{ transitionDelay: '900ms' }}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje <span className="text-red-300">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte con el Escritorio Inteligente Educativo..."
                  rows={5}
                  disabled={isSubmitting}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 focus:border-white/40 transition-all duration-300 disabled:opacity-50"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                  formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando mensaje...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar a sentioarg@gmail.com
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>Los mensajes se envían directamente a <strong className="text-blue-300">sentioarg@gmail.com</strong></span>
              </div>
              {submitStatus === 'success' && (
                <div className="mt-2 text-green-300 text-sm animate-pulse">
                  ✅ ¡Mensaje enviado exitosamente!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
