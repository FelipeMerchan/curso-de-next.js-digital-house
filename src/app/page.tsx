import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p>
          Get started by editing&nbsp;
        </p>
        <div>
          <Link
            href="/users"
          >
            Usuarios
          </Link>
        </div>
      </div>
    </main>
  );
}
