import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { RequisitoInhumacionEntity } from "../../domain/entities/requisito-inhumacion.entity";

interface RequisitoInhumacionInfoCardProps {
  requisitoInhumacion: RequisitoInhumacionEntity;
}

export function RequisitoInhumacionCard({
  requisitoInhumacion,
}: RequisitoInhumacionInfoCardProps) {
  return (
    <Card className="p-2 md:p-8 mb-6">
      <CardHeader>
        <CardTitle className="text-2xl">
          Informacion del Requisito de Inhumacion
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Datos Básicos</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">ID:</span>{" "}
                {requisitoInhumacion.idRequsitoInhumacion}
              </p>
              <p>
                <span className="font-medium">Cementerio:</span>{" "}
                {requisitoInhumacion.idCementerio?.nombre}
              </p>
              <p>
                <span className="font-medium">Pantonero a Cargo:</span>{" "}
                {requisitoInhumacion.pantoneroACargo}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
