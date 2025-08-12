"use server"

import { sendContactEmail, sendConfirmationEmail, sendCoverageRequestEmail } from "@/lib/email"
import { z } from "zod"

// Schema de validación para el formulario de contacto
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  subject: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

// Schema para solicitud de cobertura
const coverageSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Teléfono inválido"),
  address: z.string().min(10, "La dirección debe ser más específica"),
  serviceType: z.string().min(1, "Seleccione un tipo de servicio"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Extraer datos del formulario
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validar datos
    const validatedData = contactSchema.parse(rawData)

    // Enviar email al equipo
    const emailResult = await sendContactEmail(validatedData)

    if (!emailResult.success) {
      return {
        success: false,
        message: "Error al enviar el mensaje. Por favor intente nuevamente.",
        errors: {},
      }
    }

    // Enviar confirmación al cliente
    await sendConfirmationEmail(validatedData.email, validatedData.name, "contact")

    return {
      success: true,
      message:
        "¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto. También hemos enviado una confirmación a tu email.",
      errors: {},
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message
        }
      })

      return {
        success: false,
        message: "Por favor corrige los errores en el formulario",
        errors,
      }
    }

    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Error interno del servidor. Por favor intente más tarde.",
      errors: {},
    }
  }
}

export async function submitCoverageRequest(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
      serviceType: formData.get("serviceType") as string,
    }

    const validatedData = coverageSchema.parse(rawData)

    // Enviar email al equipo de cobertura
    const emailResult = await sendCoverageRequestEmail(validatedData)

    if (!emailResult.success) {
      return {
        success: false,
        message: "Error al enviar la solicitud. Por favor intente nuevamente.",
        errors: {},
      }
    }

    // Enviar confirmación al cliente
    await sendConfirmationEmail(validatedData.email, validatedData.name, "coverage")

    return {
      success: true,
      message:
        "¡Solicitud enviada exitosamente! Evaluaremos la factibilidad de cobertura en tu zona y te contactaremos pronto.",
      errors: {},
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message
        }
      })

      return {
        success: false,
        message: "Por favor corrige los errores en el formulario",
        errors,
      }
    }

    console.error("Coverage request error:", error)
    return {
      success: false,
      message: "Error interno del servidor. Por favor intente más tarde.",
      errors: {},
    }
  }
}

// Action para newsletter
export async function subscribeNewsletter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email || !z.string().email().safeParse(email).success) {
      return {
        success: false,
        message: "Por favor ingresa un email válido",
      }
    }

    // Aquí podrías integrar con un servicio como Mailchimp, ConvertKit, etc.
    // Por ahora, solo enviamos un email de confirmación

    const confirmationResult = await sendConfirmationEmail(email, "Suscriptor", "contact")

    if (!confirmationResult.success) {
      return {
        success: false,
        message: "Error al procesar la suscripción. Intenta nuevamente.",
      }
    }

    return {
      success: true,
      message: "¡Te has suscrito exitosamente! Recibirás nuestras últimas noticias y ofertas.",
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "Error interno del servidor. Por favor intente más tarde.",
    }
  }
}
