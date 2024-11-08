// src/context/UserContext.tsx
"use client";

import { getUserById } from "@/actions/getUserById";
import React, { createContext, useEffect, useState, useContext } from "react";
type User = { id: string; name: string; email: string };
// Tipagem do contexto
export type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

// Crie o contexto
export const UserContext = createContext<IUserContext | null>(null);

// Hook para acessar o contexto do usuário
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de UserContextProvider");
  }
  return context;
};

// Provedor de contexto para fornecer o valor `user` e `setUser`
export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("user-notes");
    if (token) {
      getUserById(token).then((userData) => {
        setUser(userData);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
