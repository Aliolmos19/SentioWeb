# 📧 Guía Completa de Configuración EmailJS

## 🚀 Paso a Paso para Configurar EmailJS

### 1. **Crear Cuenta en EmailJS**
1. Ve a [https://www.emailjs.com](https://www.emailjs.com)
2. Haz clic en "Sign Up" y crea tu cuenta
3. Verifica tu email

### 2. **Configurar Servicio de Email**
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** (recomendado)
4. Conecta tu cuenta de Gmail (sentioarg@gmail.com)
5. Copia el **Service ID** (ejemplo: `service_abc123`)

### 3. **Crear Template de Email**
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa este contenido para el template:

**Subject:**
\`\`\`
Nuevo contacto - {{subject}}
\`\`\`

**Content:**
\`\`\`html
<h2>Nuevo mensaje de contacto - SENTIO DESK</h2>

<h3>Información del contacto:</h3>
<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Institución:</strong> {{institution}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<p><em>Este mensaje fue enviado desde el formulario de contacto de SENTIO DESK</em></p>
\`\`\`

4. En **"Settings"** del template:
   - **To Email:** sentioarg@gmail.com
   - **From Name:** {{from_name}}
   - **Reply To:** {{from_email}}

5. Guarda y copia el **Template ID** (ejemplo: `template_7vpx45c`)

### 4. **Obtener Public Key**
1. Ve a **"Account"** en el menú
2. En la sección **"API Keys"**
3. Copia tu **Public Key** (ejemplo: `user_abc123xyz`)

### 5. **Configurar Variables de Entorno**
Agrega estas variables a tu archivo `.env.local`:

\`\`\`env
EMAILJS_SERVICE_ID=service_abc123
EMAILJS_TEMPLATE_ID=template_7vpx45c
EMAILJS_PUBLIC_KEY=user_abc123xyz
\`\`\`

## 🔍 **Verificar Configuración**

### Test desde EmailJS Dashboard
1. Ve a tu template
2. Haz clic en **"Test it"**
3. Completa los campos de prueba
4. Verifica que llegue el email a sentioarg@gmail.com

### Variables que debe tener tu template:
- `{{to_email}}` - Email destino
- `{{from_name}}` - Nombre del remitente
- `{{from_email}}` - Email del remitente
- `{{institution}}` - Institución (opcional)
- `{{message}}` - Mensaje principal
- `{{subject}}` - Asunto del email
- `{{reply_to}}` - Email para responder

## ❌ **Errores Comunes**

### "Public Key is invalid"
- Verifica que copiaste correctamente el Public Key
- Asegúrate de que no tenga espacios extra
- El Public Key debe empezar con "user_"

### "Service ID not found"
- Verifica el Service ID en Email Services
- Debe empezar con "service_"

### "Template ID not found"
- Verifica que el template existe y está activo
- Debe empezar con "template_"

## 🆓 **Límites Gratuitos**
- **200 emails/mes** en plan gratuito
- **50 emails/día** máximo
- Perfecto para formularios de contacto

## 🔧 **Troubleshooting**

Si sigues teniendo problemas:
1. Revisa los logs en la consola del navegador
2. Verifica que todas las variables estén en `.env.local`
3. Reinicia el servidor de desarrollo
4. Prueba el template directamente en EmailJS

## 📞 **Alternativa Temporal**

Si no puedes configurar EmailJS ahora, el formulario mostrará los mensajes en la consola del servidor para desarrollo, y puedes usar Resend como alternativa.
