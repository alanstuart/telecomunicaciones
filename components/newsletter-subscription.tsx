"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, AlertCircle } from "lucide-react"
import { subscribeNewsletter } from "@/app/actions/contact-actions"

export default function NewsletterSubscription() {
  const [state, formAction, isPending] = useActionState(subscribeNewsletter, {
    success: false,
    message: "",
  })

  return (
    <div className="bg-blue-50 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Suscríbete a Nuestro Newsletter</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Recibe las últimas noticias, consejos técnicos y ofertas especiales directamente en tu correo electrónico. Sin
        spam, solo contenido valioso.
      </p>

      {/* Success/Error Message */}
      {state.message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center justify-center space-x-2 max-w-md mx-auto ${
            state.success
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {state.success ? (
            <CheckCircle className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <Input name="email" type="email" placeholder="tu@email.com" required className="flex-1" />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Suscribiendo...</span>
            </div>
          ) : (
            "Suscribirse"
          )}
        </Button>
      </form>

      <p className="text-xs text-gray-500 mt-4">
        Al suscribirte, aceptas recibir emails de Eduardo Jarquín Telecomunicaciones. Puedes cancelar en cualquier
        momento.
      </p>
    </div>
  )
}
