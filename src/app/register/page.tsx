"use client";

import { createUser } from "@/actions/createUser";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  async function getNote(formData: FormData) {
    const data = await createUser(formData);
    localStorage.setItem("user-notes", data.token);
    window.location.reload();
    router.push("/dashboard");
  }
  return (
    <section className="flex justify-center">
      <div className="bg-blue-700 p-4 m-4 rounded">
        <h1 className="text-center">Register</h1>
        <form
          action={getNote}
          className="flex flex-col justify-center gap-2 p-4 w-[300px]"
        >
          <input
            className="outline-none"
            name="name"
            type="text"
            placeholder="Name..."
          />
          <input
            className="outline-none"
            name="email"
            type="email"
            placeholder="Email..."
          />

          <input
            className="outline-none"
            name="password"
            type="password"
            placeholder="Password..."
          />
          <input
            className="text-sm font-semibold bg-pink-500 mt-2 px-4 py-1 hover:bg-green-600 cursor-pointer rounded"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </section>
  );
}

export default page;
