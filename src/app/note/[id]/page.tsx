"use client";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();
  return <div>Note: {id}</div>;
}

export default page;
