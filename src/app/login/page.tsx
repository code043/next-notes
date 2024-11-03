type Note = {
  id: string;
  title: string;
  content: string;
};
async function fetchUserNotes(): Promise<Note[]> {
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
function page() {
  return (
    <section className="flex justify-center">
      <div className="p-3 m-3">
        <h1 className="text-center">Login</h1>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="password" placeholder="Password..." />
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
