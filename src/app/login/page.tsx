"use client";
import { login } from "@/actions/login";

function page() {
  async function startSession(formData: FormData) {
    const user = {
      email: formData.get("email") as string | null,
      password: formData.get("password") as string | null,
    };
    const response = await login(user);
    console.log("resposta login ", response.token);
    const token = response.token;
    localStorage.setItem("user-notes", token);
  }

  return (
    <section className="flex justify-center">
      <div className="p-3 m-3">
        <h1 className="text-center">Login</h1>
        <form action={startSession}>
          <input name="email" type="email" placeholder="Name..." />
          <input name="password" type="password" placeholder="Password..." />
          <input
            className="bg-green-500 px-3 py-1"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </section>
  );
}

export default page;
