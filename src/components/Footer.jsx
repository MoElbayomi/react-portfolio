export default function Footer() {
  return (
    <footer className="py-4 mt-auto border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="m-0">© {new Date().getFullYear()} Mohamed Elbayomi</p>
        <nav aria-label="Footer">
          <a className="me-3" href="mailto:Mh214513@dal.ca">Email</a>
          <a className="me-3" href="https://github.com/melbayomi" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
