"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const Router = useRouter();

  return (
    <div className="w-full h-screen flex  bg-gray-50 overflow-hidden">
      <div className="w-full h-full ">Pagina 2</div>
    </div>
  );
}
