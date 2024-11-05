import { Note } from "@/types/Note";

export async function getAllNotes(): Promise<Note[]> {
  "use server";
  const res = await fetch(`http://localhost:8080/notes`);
  const data = await res.json();
  console.log(data);
  return data.notes;
}
