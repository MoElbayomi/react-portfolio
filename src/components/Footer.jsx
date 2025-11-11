export default function Footer() {
  return (
    <footer className="text-center py-3 mt-5 border-top">
      <p>© {new Date().getFullYear()} Mohamed Elbayomi</p>
      <p>
        <a href="mailto:Mh214513@dal.ca" className="mx-2">MyEmail</a>
        <a href="https://github.com/MoElbayomi" target="_blank" className="mx-2">GitHub</a>
        <a href="https://www.linkedin.com/in/mohamed-elbayomi/" target="_blank" className="mx-2">MyLinkedIn</a>
      </p>
    </footer>
  );
}
