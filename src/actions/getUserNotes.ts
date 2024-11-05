import { Note } from "@/types/Note";

export async function getUserNotes(): Promise<Note> {
  const id: number = 1;
  const res = await fetch(`http://localhost:8080/user/notes/${id}`);

  const data = await res.json();
  return data.note;
}
