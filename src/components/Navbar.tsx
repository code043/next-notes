"use client";
import { IUserContext, useUser } from "@/context/user-context";
import { User } from "@/types/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { user, setUser } = useUser(); // Acesse setUser se ele existir no contexto
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user-notes");
    if (setUser) setUser(null); // Atualize o contexto do usuário
    router.push("/login"); // Redireciona para a página de login
  };
  // const { user } = useUser();
  // const router = useRouter();
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [userLogged, setUserLogged] = useState<User | null>(user);
  // console.log("dados: ", userLogged);
  // const handleLogout = () => {
  //   console.log("Logout efetuado: ", userLogged);
  //   localStorage.removeItem("user-notes");
  // };
  // useEffect(() => {
  //   console.log("user logado: ", userLogged);
  // }, []);

  // // useEffect(() => {
  // //   if (!userLogged) {
  // //     //router.push("/")
  // //     console.log("deslogado!!!")
  // //     setUserLogged(user);
  // //   }
  // // }, [setUserLogged]);
  return (
    <header className="flex justify-between p-1 relative z-20">
      <div>Logo</div>
      {user?.name}
      {user && <div>Logado: {user.name}</div>}
      <button className="" onClick={handleLogout}>
        Logout
      </button>
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
                  {user?.name.split("")[0]}
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
