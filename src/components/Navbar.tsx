"use client";
import { useUser } from "@/context/user-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logout efetuado");
    localStorage.removeItem("user-notes");
    router.push("/login");
  };
  const { user } = useUser();
  return (
    <header className="flex justify-between p-1 relative z-20">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-3">
          <Link href="/">Home</Link>
          {user && <Link href="/dashboard">Dashboard</Link>}

          <Link href="/register">Signup</Link>
          <Link href="/login">Sigin</Link>

          <li className="">
            <div
              className=""
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {user ? (
                <div className="grid place-items-center w-8 h-8 bg-purple-400 rounded-full">
                  {user.name.split("")[0]}
                </div>
              ) : (
                <div className="grid place-items-center w-8 h-8 bg-green-400 rounded-full"></div>
              )}
              {dropdownOpen && user && (
                <ul className="absolute z-20">
                  <Link href="/dashboard">Dashboard</Link>

                  <li>
                    <button className="" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
