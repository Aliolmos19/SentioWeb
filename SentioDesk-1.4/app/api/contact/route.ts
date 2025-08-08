import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, institution, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Preparar el contenido del email
    const emailContent = {
      to: 'sentioarg@gmail.com',
      subject: `Nuevo mensaje de contacto - SENTIO DESK`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 Nuevo Mensaje de Contacto</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">SENTIO DESK - Escritorio Inteligente Educativo</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">👤 Información del Contacto</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
                <p style="margin: 5px 0; color: #334155;"><strong>Nombre:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #334155;"><strong>Email:</strong> ${email}</p>
                ${institution ? `<p style="margin: 5px 0; color: #334155;"><strong>Institución:</strong> ${institution}</p>` : ''}
              </div>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin: 0 0 10px 0; font-size: 18px;">💬 Mensaje</h3>
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="color: #475569; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; border: 1px solid #bfdbfe;">
              <p style="margin: 0; color: #1e40af; font-size: 14px;">
                <strong>📅 Fecha:</strong> ${new Date().toLocaleString('es-AR', { 
                  timeZone: 'America/Argentina/Cordoba',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Este mensaje fue enviado desde el formulario de contacto de 
                <strong style="color: #1e40af;">SENTIO DESK</strong>
              </p>
            </div>
          </div>
        </div>
      `
    }

    let emailSent = false
    let serviceName = 'Desarrollo'

    // Verificar configuración de Resend
    const hasResendConfig = process.env.RESEND_API_KEY

    console.log('🔍 Verificando configuración del servidor...')
    console.log(`Resend configurado: ${hasResendConfig ? '✅' : '❌'}`)

    // Usar Resend si está configurado
    if (hasResendConfig) {
      try {
        console.log('🔄 Enviando con Resend...')
        
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'SENTIO DESK <onboarding@resend.dev>',
            to: ['sentioarg@gmail.com'],
            reply_to: email,
            subject: emailContent.subject,
            html: emailContent.html,
          }),
        })

        const resendData = await resendResponse.json()
        console.log(`📨 Respuesta de Resend (${resendResponse.status}):`, resendData)

        if (resendResponse.ok) {
          console.log('✅ Email enviado exitosamente con Resend')
          emailSent = true
          serviceName = 'Resend'
        } else {
          console.error('❌ Error de Resend:', resendData)
          throw new Error(`Resend error: ${JSON.stringify(resendData)}`)
        }
      } catch (resendError) {
        console.error('❌ Error al conectar con Resend:', resendError)
        throw new Error(`Error de conexión con Resend: ${resendError}`)
      }
    }
    
    // Modo desarrollo: Si no hay servicios configurados
    if (!hasResendConfig) {
      console.log('📧 MODO DESARROLLO - Email que se enviaría:')
      console.log('='.repeat(60))
      console.log(`Para: sentioarg@gmail.com`)
      console.log(`De: ${name} (${email})`)
      console.log(`Institución: ${institution || 'No especificada'}`)
      console.log(`Asunto: Nuevo contacto de ${name} - SENTIO DESK`)
      console.log(`Mensaje: ${message}`)
      console.log('='.repeat(60))
      console.log('⚠️  Para envío real, configura RESEND_API_KEY')
      console.log('   EmailJS se maneja desde el cliente (browser)')
      emailSent = true // Simular éxito en desarrollo
      serviceName = 'Desarrollo'
    }

    if (emailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Mensaje enviado correctamente a sentioarg@gmail.com. Te responderemos pronto.',
          service: serviceName
        },
        { status: 200 }
      )
    } else {
      throw new Error('No se pudo enviar el email')
    }

  } catch (error) {
    console.error('❌ Error general al procesar contacto:', error)
    
    return NextResponse.json(
      { 
        error: 'Error al enviar el mensaje. Por favor, intenta de nuevo o contacta directamente a sentioarg@gmail.com',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : String(error)) : undefined
      },
      { status: 500 }
    )
  }
}
