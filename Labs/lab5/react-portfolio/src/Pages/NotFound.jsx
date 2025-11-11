import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main id="main" className="container section">
      <h1>404 — Page not found</h1>
      <p>We couldn’t find that page.</p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </main>
  );
}
