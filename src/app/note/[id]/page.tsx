"use client";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  return (
    <section>
      <div>
        <h1>Note</h1>
        <div>
          <h2>Title</h2>
          <div>Anotation</div>
        </div>
      </div>
    </section>
  );
}

export default page;
