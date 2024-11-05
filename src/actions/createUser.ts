import { Note } from "@/types/Note";

export async function createUser(): Promise<Note[]> {
  const res = await fetch(`http://localhost:8080/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John",
      email: "email@gmail.com",
      password: "123",
    }),
  });

  return res.json();
}
