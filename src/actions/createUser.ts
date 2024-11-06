import { Note } from "@/types/Note";
import { RegisterResponse } from "@/types/User";

export async function createUser(
  formData: FormData
): Promise<RegisterResponse> {
  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(user);
  const res = await fetch(`http://localhost:8080/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();
  //console.log(data);
  return data;
}
