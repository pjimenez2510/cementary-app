import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { NichoHuecosList } from "../../../huecos/presentation/components/nicho-huecos-list.component";
import { NichoHuecoForm } from "../../../huecos/presentation/components/nicho-hueco-form.component";
import { useState } from "react";

interface NichoHuecosTabProps {
  nichoId: string;
}

export function NichoHuecosTab({ nichoId }: NichoHuecosTabProps) {
  const [isHuecoModalOpen, setIsHuecoModalOpen] = useState(false);

  const handleHuecoSuccess = () => {
    setIsHuecoModalOpen(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Huecos del Nicho</CardTitle>
        <div className="flex justify-end mb-4">
          <Dialog open={isHuecoModalOpen} onOpenChange={setIsHuecoModalOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="w-4 h-4" /> Nuevo Hueco
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear Nuevo Hueco</DialogTitle>
              </DialogHeader>
              <NichoHuecoForm nichoId={nichoId} onSuccess={handleHuecoSuccess} />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <NichoHuecosList nichoId={nichoId} />
      </CardContent>
    </Card>
  );
} 