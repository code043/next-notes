import { getAllNotes } from "@/actions/getAllNotes";
import Link from "next/link";

export default async function Home() {
  const notes = await getAllNotes();
  return (
    <section>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <div className="bg-green-500 w-[300px] h-[300px] m-2 p-2 rounded">
                <Link href={`/note/${note.id}`}>
                  <h2>{note.title}</h2>
                </Link>
                <div>{note.content}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
