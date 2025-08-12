"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle } from "lucide-react"
import { submitCoverageRequest } from "@/app/actions/contact-actions"

interface CoverageRequestFormProps {
  initialAddress: string
}

export default function CoverageRequestForm({ initialAddress }: CoverageRequestFormProps) {
  const [state, formAction, isPending] = useActionState(submitCoverageRequest, {
    success: false,
    message: "",
    errors: {},
  })

  return (
    <div className="bg-white p-4 rounded-lg border border-red-200 mt-4">
      <h4 className="font-semibold text-gray-900 mb-4">Solicitar Cobertura en Mi Zona</h4>

      {/* Success/Error Message */}
      {state.message && (
        <div
          className={`mb-4 p-3 rounded-lg flex items-center space-x-2 ${
            state.success
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {state.success ? (
            <CheckCircle className="h-4 w-4 text-green-600" />
          ) : (
            <AlertCircle className="h-4 w-4 text-red-600" />
          )}
          <p className="text-sm">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-4">
        <input type="hidden" name="address" value={initialAddress} />

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="coverage-name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo *
            </label>
            <Input
              id="coverage-name"
              name="name"
              placeholder="Tu nombre completo"
              required
              className={state.errors.name ? "border-red-500" : ""}
            />
            {state.errors.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
          </div>

          <div>
            <label htmlFor="coverage-phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono *
            </label>
            <Input
              id="coverage-phone"
              name="phone"
              placeholder="+506 8888-9999"
              required
              className={state.errors.phone ? "border-red-500" : ""}
            />
            {state.errors.phone && <p className="text-red-500 text-xs mt-1">{state.errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="coverage-email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico *
          </label>
          <Input
            id="coverage-email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            className={state.errors.email ? "border-red-500" : ""}
          />
          {state.errors.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-1">
            Servicio de Interés *
          </label>
          <Select name="serviceType" required>
            <SelectTrigger className={state.errors.serviceType ? "border-red-500" : ""}>
              <SelectValue placeholder="Selecciona el servicio que te interesa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="internet-residencial">Internet Residencial</SelectItem>
              <SelectItem value="internet-empresarial">Internet Empresarial</SelectItem>
              <SelectItem value="paquete-completo">Paquete Completo (Internet + TV + Teléfono)</SelectItem>
              <SelectItem value="solo-telefonia">Solo Telefonía</SelectItem>
              <SelectItem value="solo-television">Solo Televisión</SelectItem>
            </SelectContent>
          </Select>
          {state.errors.serviceType && <p className="text-red-500 text-xs mt-1">{state.errors.serviceType}</p>}
        </div>

        <Button type="submit" className="w-full" size="sm" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
              <span>Enviando Solicitud...</span>
            </div>
          ) : (
            "Solicitar Cobertura"
          )}
        </Button>
      </form>
    </div>
  )
}
