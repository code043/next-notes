"use client";
type Note = {
  id: string;
  title: string;
  content: string;
};
async function fetchUserNotes(): Promise<Note[]> {
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
function page() {
  async function getNote(formData: FormData) {
    await fetchUserNotes();
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
