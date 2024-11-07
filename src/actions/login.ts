import { Note } from "@/types/Note";

type Response = {
  message: string;
  user: { id: string; name: string };
  token: string;
};

export async function login(user: {
  email: string | null;
  password: string | null;
}): Promise<Response> {
  const res = await fetch(`http://localhost:8080/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return res.json();
}
