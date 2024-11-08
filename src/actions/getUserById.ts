type UserLogged = {
  id: string;
  name: string;
  email: string;
};

export async function getUserById(token: string): Promise<UserLogged> {
  console.log("Token action: ", token);
  const id: string = "203545f5-ff1e-48f8-af8d-03ead2f06e6f";
  const res = await fetch(`http://localhost:8080/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const { user } = await res.json();
  console.log("User action: ", user);
  return user;
}
