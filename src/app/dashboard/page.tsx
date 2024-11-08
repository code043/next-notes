"use client";
import { createNote } from "@/actions/createNote";
import { getUserNotes } from "@/actions/getUserNotes";
import { useUser } from "@/context/user-context";
import { Note } from "@/types/Note";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user === null) {
      setLoading(true);
      router.push("/login");
    } else {
      setLoading(false);
      router.push("/dashboard");
    }
  }, [user, router]);
  const [notes, setNotes] = useState<Note[] | null>(null);

  async function create(formData: FormData) {
    const token: string | null = localStorage.getItem("user-notes");

    const note = {
      title: formData.get("title") as string | null,
      content: formData.get("content") as string | null,
      token: token as string | null,
    };
    await createNote(note);
  }
  async function getNotes() {
    const data: Note[] | null = await getUserNotes();
    console.log("notas user: ", data);
    setNotes(data);
  }
  useEffect(() => {
    // permission();
  }, []);
  useEffect(() => {
    getNotes();
  }, []);
  if (loading) {
    // Exibe uma tela de carregamento enquanto o estado do usuário é verificado
    return <div>Carregando...</div>;
  }
  return (
    <section>
      <div className="flex justify-center">
        <form
          action={create}
          id="note-form"
          className="flex flex-col gap-2 w-[350px] p-10 m-4 bg-blue-200 border border-radius"
        >
          <input
            className="outline-none"
            name="title"
            type="text"
            placeholder="Title..."
          />
          <textarea
            className="h-60 outline-none resize-none"
            placeholder="Write your note..."
            name="content"
            id="content"
          ></textarea>
          <input
            className="bg-blue-400 cursor-pointer hover:bg-green-400 p-1"
            id="send"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div>
        <ul>
          {notes &&
            notes.map((note: Note) => {
              return (
                <li key={note.id}>
                  <div>
                    <h1>Note: {note.id}</h1>
                    <div>
                      <h2>{note.title}</h2>
                      <div>{note.content}</div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
