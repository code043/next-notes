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
    <section>
      <div>
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder="Name..." />
          <input type="password" placeholder="Password..." />
          <input type="submit" value="Login" />
        </form>
      </div>
    </section>
  );
}

export default page;
