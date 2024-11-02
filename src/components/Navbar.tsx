import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Notes</Link>

          <div>
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
