export default function UserPage({ params }: { params: { username: string; } }) {
  return <div>Nombre de usuario: {params.username}</div>
}