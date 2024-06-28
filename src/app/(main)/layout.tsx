import Link from "next/link";

export default function UsersLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex justify-between mb-4 px-8 py-4 bg-gray-100">
        <div>
          Logo
        </div>
        <div className="flex">
          <div>
            <Link href='/users'>Usuarios</Link>
          </div>
          <div className="ml-4">
            <Link href='/messages'>Mensajes</Link>
          </div>
        </div>
      </header>
      {children}
      <div>
        Pie de página usuarios
      </div>
    </>
  )
}