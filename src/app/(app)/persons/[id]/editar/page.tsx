import PersonEditView from "@/features/person/presentation/views/person-edit.view";

export default function PersonEditPage({ params }: { params: { id: string } }) {
  return <PersonEditView personId={params.id} />;
} 