"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, KeyRound, User } from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulación de carga
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="border-2 shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <KeyRound className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Acceso al Sistema</CardTitle>
          <CardDescription className="text-base">Ingrese sus credenciales para acceder</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="cedula">Número de Cédula</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="cedula" placeholder="Ingrese su número de cédula" className="pl-9" required />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link href="/recuperar-contrasena" className="text-sm text-primary hover:underline">
                  ¿Olvidó su contraseña?
                </Link>
              </div>
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="Ingrese su contraseña" className="pl-9" required />
              </div>
            </div>
            <Button type="submit" className="mt-2 w-full" disabled={isLoading}>
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t p-6">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 inline-block">¿No tiene una cuenta?</span>
            <Link
              aria-label="Registrarse"
              href="/sign-up"
              className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              Registrarse
            </Link>
          </div>
          <Link href="/" className="text-sm font-medium text-primary hover:underline">
            Volver al inicio
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

