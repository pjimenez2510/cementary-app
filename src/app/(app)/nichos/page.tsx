"use client";

import ContainerApp from "@/core/layout/container-app";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";

export default function NichosPage() {
  return (
    <ContainerApp title="Nichos">
      <Card>
        <CardHeader>
          <CardTitle>Nichos</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Aquí irá el contenido de la lista de nichos */}
        </CardContent>
      </Card>
    </ContainerApp>
  );
}
