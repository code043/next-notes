export async function createNote(note: {
  title: string | null;
  content: string | null;
  token: string | null;
}): Promise<void> {
  await fetch(`http://localhost:8080/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  });
}
