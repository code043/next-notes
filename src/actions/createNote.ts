export async function createNote(note: {
  title: string | null;
  content: string | null;
  userId: string | null;
}): Promise<void> {
  await fetch(`http://localhost:8080/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: note.title,
      content: note.content,
      userId: "203545f5-ff1e-48f8-af8d-03ead2f06e6f",
    }),
  });
}
