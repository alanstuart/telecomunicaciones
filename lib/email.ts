import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface CoverageFormData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Eduardo Jarquín <noreply@eduardojarquin.cr>",
      to: ["info@eduardojarquin.cr"],
      cc: [data.email], // Copia al cliente
      subject: `Nueva consulta: ${data.subject || "Consulta general"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
            <h1>Nueva Consulta - Eduardo Jarquín Telecomunicaciones</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #1e40af;">Información del Cliente</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Nombre:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Teléfono:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Asunto:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.subject}</td>
              </tr>
            </table>
            
            <h3 style="color: #1e40af; margin-top: 20px;">Mensaje:</h3>
            <div style="background-color: white; padding: 15px; border-radius: 8px; border-left: 4px solid #1e40af;">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
              <p style="margin: 0; color: #1e40af; font-weight: bold;">
                📞 Recuerda contactar al cliente dentro de las próximas 2 horas
              </p>
            </div>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>Eduardo Jarquín Telecomunicaciones - Costa Rica</p>
            <p>Este email fue generado automáticamente desde el sitio web</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}

export async function sendCoverageRequestEmail(data: CoverageFormData) {
  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Eduardo Jarquín <noreply@eduardojarquin.cr>",
      to: ["cobertura@eduardojarquin.cr"],
      cc: [data.email],
      subject: `Solicitud de Cobertura - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #059669; color: white; padding: 20px; text-align: center;">
            <h1>Solicitud de Expansión de Cobertura</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f9fafb;">
            <h2 style="color: #059669;">Información del Solicitante</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Nombre:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Teléfono:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Dirección:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.address}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #e5e7eb;">Servicio de Interés:</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${data.serviceType}</td>
              </tr>
            </table>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #d1fae5; border-radius: 8px;">
              <p style="margin: 0; color: #059669; font-weight: bold;">
                🗺️ Evaluar factibilidad técnica y comercial para esta zona
              </p>
            </div>
          </div>
          
          <div style="background-color: #374151; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p>Eduardo Jarquín Telecomunicaciones - Departamento de Expansión</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending coverage email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending coverage email:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}

// Email de confirmación para el cliente
export async function sendConfirmationEmail(email: string, name: string, type: "contact" | "coverage") {
  const subject = type === "contact" ? "Confirmación de Consulta Recibida" : "Solicitud de Cobertura Recibida"
  const title = type === "contact" ? "Consulta Recibida" : "Solicitud de Cobertura Recibida"

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: "Eduardo Jarquín <noreply@eduardojarquin.cr>",
      to: [email],
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
            <h1>${title}</h1>
          </div>
          
          <div style="padding: 20px;">
            <p>Estimado/a ${name},</p>
            
            <p>Hemos recibido su ${type === "contact" ? "consulta" : "solicitud de cobertura"} y queremos confirmarle que la estamos procesando.</p>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">¿Qué sigue ahora?</h3>
              <ul style="color: #1e40af;">
                <li>Nuestro equipo revisará su ${type === "contact" ? "consulta" : "solicitud"} en las próximas 2 horas</li>
                <li>Un representante se pondrá en contacto con usted</li>
                <li>Le brindaremos una respuesta personalizada a sus necesidades</li>
              </ul>
            </div>
            
            <p><strong>Mientras tanto, puede:</strong></p>
            <ul>
              <li>Visitar nuestro sitio web para conocer más sobre nuestros servicios</li>
              <li>Contactarnos por WhatsApp: +506 8888-9999</li>
              <li>Llamarnos al: +506 2222-3333</li>
            </ul>
            
            <p>Gracias por confiar en Eduardo Jarquín Telecomunicaciones.</p>
            
            <p>Saludos cordiales,<br>
            <strong>Equipo de Atención al Cliente</strong><br>
            Eduardo Jarquín Telecomunicaciones</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>Eduardo Jarquín Telecomunicaciones</p>
            <p>San José, Costa Rica | +506 2222-3333 | info@eduardojarquin.cr</p>
            <p>Si no solicitó esta información, puede ignorar este correo.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending confirmation email:", error)
      return { success: false, error: error.message }
    }

    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error sending confirmation email:", error)
    return { success: false, error: "Error interno del servidor" }
  }
}
