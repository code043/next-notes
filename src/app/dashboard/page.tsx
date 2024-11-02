type Note = {
  id: string;
  title: string;
  content: string;
};
async function fetchUserNotes(): Promise<Note[]> {
  const id = 1;
  const res = await fetch(`http://localhost:8080/api/users/${id}`);

  return res.json();
}
export default async function page() {
  const data = await fetchUserNotes();
  return (
    <section>
      <div>
        <ul>
          {data.map((note: Note) => {
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
          })}
        </ul>
      </div>
    </section>
  );
}
