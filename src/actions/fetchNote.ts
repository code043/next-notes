"use server";
import { Note } from "@/types/Note";

export async function fetchNote(
  id: string | string[] | undefined
): Promise<Note> {
  "use server";
  const res = await fetch(`http://localhost:8080/notes/${id}`);
  const data = await res.json();
  console.log(data);
  return data.note;
}
