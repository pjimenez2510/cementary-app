import CementeryEditView from "@/features/cementery/presentation/views/cementery-edit.view";

export default function CementeryEditPage({ params }: { params: { id: string } }) {
  return <CementeryEditView cementeryId={params.id} />;
} 