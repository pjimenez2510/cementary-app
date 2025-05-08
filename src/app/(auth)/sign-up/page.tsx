"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, AtSign, Check, KeyRound, User, UserPlus } from "lucide-react"

import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError] = useState("")
  const [cedulaError] = useState("")

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <Card className="border-2 shadow-lg">
        <CardHeader className="space-y-2 text-center">
          <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <UserPlus className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">Registro de Usuario</CardTitle>
          <CardDescription className="text-base">Complete el formulario para crear su cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="cedula">Número de Cédula</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="cedula"
                  placeholder="Ingrese su número de cédula"
                  className="pl-9"
                  required
                />
              </div>
              {cedulaError && <p className="text-sm text-destructive">{cedulaError}</p>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="usuario@ejemplo.com" className="pl-9" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" placeholder="Juan" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="apellido">Apellido</Label>
                <Input id="apellido" placeholder="Pérez" required />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Cree una contraseña segura"
                  className="pl-9"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              {passwordError && <p className="text-sm text-destructive">{passwordError}</p>}
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="flex items-center">
                  <Check
                    className={`mr-1 h-3 w-3 ${password.length >= 8 ? "text-green-500" : "text-muted-foreground"}`}
                  />
                  Mínimo 8 caracteres
                </p>
                <p className="flex items-center">
                  <Check
                    className={`mr-1 h-3 w-3 ${/[A-Z]/.test(password) ? "text-green-500" : "text-muted-foreground"}`}
                  />
                  Al menos una letra mayúscula
                </p>
                <p className="flex items-center">
                  <Check
                    className={`mr-1 h-3 w-3 ${/[0-9]/.test(password) ? "text-green-500" : "text-muted-foreground"}`}
                  />
                  Al menos un número
                </p>
              </div>
            </div>

            <div className="mt-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Procesando..." : "Crear Cuenta"}
                {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-between gap-2 border-t p-6">
          <div className="text-sm text-muted-foreground">
            <span className="mr-1 inline-block">¿Ya tiene una cuenta?</span>
            <Link
              aria-label="Iniciar sesión"
              href="/sign-in"
              className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
            >
              Iniciar sesión
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
