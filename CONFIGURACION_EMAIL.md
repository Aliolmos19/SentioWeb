# 📧 Configuración de Envío de Emails

## Opción 1: Resend (Recomendado)

### 1. Crear cuenta en Resend
- Ve a [https://resend.com](https://resend.com)
- Regístrate con tu email
- Verifica tu cuenta

### 2. Obtener API Key
- Ve a "API Keys" en el dashboard
- Crea una nueva API key
- Cópiala y agrégala a `.env.local`:
\`\`\`
RESEND_API_KEY=re_tu_api_key_aqui
\`\`\`

### 3. Verificar dominio (opcional)
- Para producción, verifica tu dominio
- Para desarrollo, puedes usar el dominio de prueba

## Opción 2: EmailJS (Alternativa gratuita)

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com](https://www.emailjs.com)
- Regístrate y crea un servicio

### 2. Configurar servicio de Gmail
- Conecta tu cuenta de Gmail
- Crea un template de email

### 3. Obtener credenciales
- Service ID, Template ID y Public Key
- Agrégalos a `.env.local`:
\`\`\`
EMAILJS_SERVICE_ID=tu_service_id
EMAILJS_TEMPLATE_ID=tu_template_id  
EMAILJS_PUBLIC_KEY=tu_public_key
\`\`\`

## Instalación de dependencias

Si usas Resend, instala el paquete:
\`\`\`bash
npm install resend
\`\`\`

## Pruebas

1. Sin configuración: Los emails se mostrarán en la consola
2. Con configuración: Se enviarán realmente a sentioarg@gmail.com

## Características implementadas

✅ Validación de formulario
✅ Estados de carga y éxito/error
✅ Email HTML con diseño profesional
✅ Información completa del contacto
✅ Timestamp con zona horaria de Argentina
✅ Feedback visual para el usuario
✅ Prevención de spam con validaciones
