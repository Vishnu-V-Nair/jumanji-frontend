export default function Footer() {
  return (
    <footer className="bg-dark text-light py-2 border-top mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div>
          <strong>Jumanji Trip Advisors</strong> &copy; {new Date().getFullYear()}
        </div>

        <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light">
            <i className="bi bi-facebook fs-5"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light">
            <i className="bi bi-instagram fs-5"></i>
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-light">
            <i className="bi bi-whatsapp fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
