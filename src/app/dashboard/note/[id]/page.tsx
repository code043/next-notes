import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();
  return <div>Note: {id}</div>;
}
