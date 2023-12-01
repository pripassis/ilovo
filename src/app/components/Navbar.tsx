import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex w-96 h-screen bg-slate-500 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-white">
            Home
          </Link>
          <Link href="/Dashboard" className="text-white">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}
