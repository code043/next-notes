type Note = {
  title: string;
  content: string;
};
async function fetchNotes(): Promise<Note[]> {
  const res = await fetch(`http://localhost:8080/api/notes`);
  return res.json();
}
export default async function Home() {
  const res = await fetchNotes();
  return (
    <section>
      <h1>Notes</h1>
    </section>
  );
}
