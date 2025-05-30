"use client";

import ContainerApp from "@/core/layout/container-app";
import { useSession } from "next-auth/react";

export default function MainPage() {
  const auth = useSession();

  return (
    <ContainerApp title="Dashboard">
      <div className="flex h-96 flex-col gap-4">
        <h1>Dashboard</h1>
        <p>{JSON.stringify(auth.data)}</p>
      </div>
    </ContainerApp>
  );
}
