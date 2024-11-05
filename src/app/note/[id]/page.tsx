"use client";
import { getNoteById } from "@/actions/getNoteById";
import { Note } from "@/types/Note";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function NoteByID() {
  const { id } = useParams();
  const [note, setNote] = useState<Note | null>(null);
  async function noteById() {
    const noteById: Note = await getNoteById(id);
    setNote(noteById);
  }
  useEffect(() => {
    noteById();
  }, []);
  return (
    <section>
      {note && (
        <div>
          <h1>Note ID: {note.id}</h1>
          <div className="bg-green-500 w-[300px] h-[300px] m-2 p-2 rounded">
            <Link href={`/note/${note.id}`}>
              <h2>{note.title}</h2>
            </Link>
            <div>{note.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default NoteByID;
