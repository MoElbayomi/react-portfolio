import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "var(--primary)",
        borderBottom: "3px solid var(--accent)",
        padding: "1rem",
        textAlign: "center"
      }}
    >
      <nav>
        <Link to="/" style={{ margin: "0 15px", color: "var(--light)", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 15px", color: "var(--light)", fontWeight: "bold" }}>
          About
        </Link>
        <Link to="/projects" style={{ margin: "0 15px", color: "var(--light)", fontWeight: "bold" }}>
          Projects
        </Link>
      </nav>
    </header>
  );
}
