import { Note } from "@/types/Note";
import { RegisterResponse } from "@/types/User";

export async function createUser(): Promise<RegisterResponse> {
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

  const data = await res.json();
  //console.log(data);
  return data;
}
