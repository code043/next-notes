import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="flex justify-center p-1">
      <div>Logo</div>
      <nav>
        <ul className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/">Notes</Link>

          <div className="">
            <h2>Name</h2>
            <Link href="/">Dashboard</Link>
            <button>New note</button>
            <button>Logout</button>
          </div>
        </ul>
      </nav>
    </header>
  );
};
