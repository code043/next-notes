type Note = {
  id: string;
  title: string;
  content: string;
};
async function fetchUserNotes(): Promise<Note[]> {
  const id = 1;
  const res = await fetch(`http://localhost:8080/api/users/`, {
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
  return (
    <section>
      <div>
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="Email..." />

          <input type="password" placeholder="Password..." />
          <input type="submit" value="Register" />
        </form>
      </div>
    </section>
  );
}

export default page;
