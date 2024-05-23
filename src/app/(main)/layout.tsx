export default function UsersLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        Encabezado usuarios
      </div>
      {children}
      <div>
        Pie de página usuarios
      </div>
    </>
  )
}