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

async function createNote(): Promise<void> {
  await fetch(`http://localhost:8080/register/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Nextjs",
      content: "Learn Nextjs...",
    }),
  });
}
export default async function page() {
  const data = await fetchUserNotes();
  return (
    <section>
      <div className="flex justify-center">
        <form
          action={createNote}
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
