import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function testEmail() {
  try {
    console.log("🧪 Probando configuración de Resend...")

    const { data, error } = await resend.emails.send({
      from: "Eduardo Jarquín <onboarding@resend.dev>", // Email por defecto de Resend
      to: ["tu-email@gmail.com"], // Cambia por tu email real
      subject: "✅ Prueba de Configuración - Eduardo Jarquín",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
            <h1>🎉 ¡Configuración Exitosa!</h1>
          </div>
          
          <div style="padding: 20px;">
            <h2>¡Felicidades!</h2>
            <p>Tu configuración de Resend está funcionando correctamente.</p>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">✅ Lo que funciona ahora:</h3>
              <ul style="color: #1e40af;">
                <li>Formulario de contacto</li>
                <li>Solicitudes de cobertura</li>
                <li>Suscripción al newsletter</li>
                <li>Emails de confirmación automáticos</li>
              </ul>
            </div>
            
            <p>¡Tu sitio web de Eduardo Jarquín Telecomunicaciones está listo!</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Eduardo Jarquín Telecomunicaciones - Costa Rica</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("❌ Error:", error)
      return
    }

    console.log("✅ Email enviado exitosamente!")
    console.log("📧 ID del email:", data.id)
    console.log("🎯 Revisa tu bandeja de entrada")
  } catch (error) {
    console.error("❌ Error de configuración:", error.message)

    if (error.message.includes("API key")) {
      console.log("\n🔧 Solución:")
      console.log("1. Verifica que tu RESEND_API_KEY esté en .env.local")
      console.log('2. Asegúrate de que comience con "re_"')
      console.log("3. Reinicia el servidor de desarrollo")
    }
  }
}

testEmail()
