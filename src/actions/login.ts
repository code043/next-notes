import { Note } from "@/types/Note";

export async function login(): Promise<Note[]> {
  "user server";
  const res = await fetch(`http://localhost:8080/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "email@gmail.com",
      password: "123",
    }),
  });

  return res.json();
}
