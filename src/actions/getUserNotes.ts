import { Note } from "@/types/Note";

export async function getUserNotes(): Promise<Note[]> {
  const id: string = "203545f5-ff1e-48f8-af8d-03ead2f06e6f";
  const res = await fetch(`http://localhost:8080/user/notes/${id}`);

  const data = await res.json();
  return data.note;
}
