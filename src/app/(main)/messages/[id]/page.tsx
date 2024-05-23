export default function UserPage({ params }: { params: { id: string; } }) {
  return <div>Mensaje: {params.id}</div>
}