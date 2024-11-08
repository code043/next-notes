"use client";

import { getUserById } from "@/actions/getUserById";
import { createContext, useEffect, useState, useContext } from "react";

type User = { id: string; name: string; email: string };

export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserContextProvider");
  }
  return context;
};

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("user-notes");
      if (token) {
        try {
          const userData = await getUserById(token);
          setUser(userData);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
