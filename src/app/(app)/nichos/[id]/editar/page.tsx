import NichoEditView from "@/features/nichos/presentation/views/nicho-edit.view";

export default function NichoEditPage({ params }: { params: { id: string } }) {
  return <NichoEditView nichoId={params.id} />;
} 