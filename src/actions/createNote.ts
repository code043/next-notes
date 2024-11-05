export async function createNote(): Promise<void> {
  await fetch(`http://localhost:8080/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Nextjs",
      content: "Learn Nextjs...",
      userId: "203545f5-ff1e-48f8-af8d-03ead2f06e6f",
    }),
  });
}
