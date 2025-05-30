import InhumacionEditView from "@/features/inhumaciones/presentation/views/inhumacion-edit.view";


export default function InhumacionEditarPage({params}: { params: { id: string } }) {
    return <InhumacionEditView inhumacionId={params.id} />
}