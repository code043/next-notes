import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  return (
    <section>
      <div>
        <h1>Note</h1>
        <div>
          <h2>Title</h2>
          <div>Anotation</div>
          <p>Note ID: {id}</p>
        </div>
      </div>
    </section>
  );
}
