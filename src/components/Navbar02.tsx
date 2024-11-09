"use client";
import { useUser } from "@/context/user-context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user-notes");
    if (setUser) setUser(null);
    router.push("/login");
  };

  return (
    <header className="flex justify-between p-1 relative z-20">
      <div>Logo</div>

      <nav>
        <ul className="flex gap-3 items-center">
          <Link href="/">Home</Link>
          {user ? (
            <>
              <Link href="/dashboard">Dashboard</Link>
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className="grid place-items-center w-8 h-8 bg-purple-400 rounded-full">
                  {user.name[0]}
                </div>
                {dropdownOpen && (
                  <ul className="absolute z-20 mt-2 bg-white border rounded shadow-lg p-2">
                    <li>
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button className="mt-1" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </>
          ) : (
            <>
              <Link href="/register">Signup</Link>
              <Link href="/login">Signin</Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
