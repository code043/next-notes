import Link from "next/link";

type Note = {
  id: number;
  title: string;
  content: string;
};
async function fetchNotes(): Promise<Note[]> {
  "use server";
  const res = await fetch(`http://localhost:8080/notes`);
  const data = await res.json();
  console.log(data);
  return data.notes;
}
export default async function Home() {
  const notes = await fetchNotes();
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
