"use client";
import { useUser } from "@/context/user-context";
import Link from "next/link";

export const Navbar = () => {
  const { user } = useUser();
  return (
    <header className="flex justify-between p-1">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Notes</Link>

          <Link href="/register">Signup</Link>
          <Link href="/login">Sigin</Link>
          {user && <div>Olá, {user.name}</div>}

          <div className="opacity-0">
            <h2>Name</h2>
            <Link href="/">Dashboard</Link>
            <button>New note</button>
            <button>Logout</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};
