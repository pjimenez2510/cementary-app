"use client";

import ContainerApp from "@/core/layout/container-app";
import { useSession } from "next-auth/react";
import Link from "next/link";

const features = [
  {
    title: "Gestión de Nichos y Huecos",
    description: "Administra los nichos y huecos del cementerio de forma eficiente.",
    href: "/nichos",
    accent: "border-green-500 bg-green-50 hover:bg-green-100",
  },
  {
    title: "Propietarios y Herederos",
    description: "Gestiona los propietarios y herederos de cada nicho.",
    href: "/persons",
    accent: "border-emerald-500 bg-emerald-50 hover:bg-emerald-100",
  },
  {
    title: "Inhumaciones y Requisitos",
    description: "Registra y consulta inhumaciones y sus requisitos legales.",
    href: "/inhumaciones",
    accent: "border-lime-500 bg-lime-50 hover:bg-lime-100",
  },
  {
    title: "Mapa Interactivo del Cementerio",
    description: "Visualiza y navega el cementerio con un mapa interactivo.",
    href: "/map",
    accent: "border-teal-500 bg-teal-50 hover:bg-teal-100",
  },
];

export default function MainPage() {
  const { data: session } = useSession();
  const userName = session?.user?.username || "Usuario";

  return (
    <ContainerApp title="Dashboard">
      <div className="min-h-[calc(100vh-100px)] w-full flex items-center justify-center bg-gradient-to-br from-green-100/60 to-white">
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              ¡Hola, {userName}!
            </h1>
            <p className="text-xl md:text-2xl text-green-700 font-medium mb-1">
              ¿Cómo podemos ayudarte hoy?
            </p>
            <p className="text-base text-gray-500">
              Accede a los módulos principales del sistema de cementerios.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={`block rounded-2xl shadow-md p-8 transition-all border-2 ${feature.accent} group focus:outline-none`}
              >
                <div className="flex flex-col gap-2 h-full items-center justify-center text-center">
                  <span className="text-2xl font-bold text-green-800 group-hover:underline">
                    {feature.title}
                  </span>
                  <span className="text-base text-gray-600">
                    {feature.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-base text-gray-400 mt-12 text-center">
            Sistema desarrollado para la gestión eficiente y moderna de cementerios municipales.
          </p>
        </div>
      </div>
    </ContainerApp>
  );
}
