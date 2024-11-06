import { createNote } from "@/actions/createNote";
import { getUserNotes } from "@/actions/getUserNotes";
import { Note } from "@/types/Note";
import { useEffect, useState } from "react";

export default async function page() {
  const [notes, setNotes] = useState<Note | null>(null);

  async function create(formData: FormData) {
    const token: string | null = localStorage.getItem("user-notes");
    token?.split(".")[1];
    console.log(token);
    let userData: string = "";
    if (token) {
      userData = atob(token);
    }

    console.log("decode: ", JSON.parse(userData));
    const { userId } = JSON.parse(userData);
    console.log(userId);

    const note = {
      title: formData.get("title") as string | null,
      content: formData.get("content") as string | null,
      userId: userId as string | null,
    };
    await createNote(note);
  }
  async function getNotes() {
    const data: Note | null = await getUserNotes();
    setNotes(data);
  }
  useEffect(() => {
    getNotes();
  }, []);
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
          {/* {note.map((note: Note) => {
            return (
              <li>
                <div>
                  <h1>Note: {note.id}</h1>
                  <div>
                    <h2>{note.title}</h2>
                    <div>{note.content}</div>
                  </div>
                </div>
              </li>
            );
          })} */}
        </ul>
      </div>
    </section>
  );
}
