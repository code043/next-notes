"use client";

import { createUser } from "@/actions/createUser";

function page() {
  async function getNote(formData: FormData) {
    const data = await createUser();
    console.log("Register: ", data.token);
    localStorage.setItem("user-notes", data.token);
  }
  return (
    <section className="flex justify-center">
      <div className="p-4 m-4">
        <h1 className="text-center">Register</h1>
        <form action={getNote} className="flex flex-col justify-center p-4">
          <input name="name" type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />

          <input type="password" placeholder="Password..." />
          <input
            className="bg-pink-500 px-4 py-1"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </section>
  );
}

export default page;
