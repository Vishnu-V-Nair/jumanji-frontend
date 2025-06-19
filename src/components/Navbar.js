import { Link } from 'react-router-dom';

export default function Navbar() {
  const isAdmin = localStorage.getItem('role') === 'admin';

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">JUMANJI TRIP ADVISORS</Link>
        <div className="d-flex">
          <Link className="btn btn-outline-light me-2" to="/">Home</Link>
          {isAdmin && <Link className="btn btn-outline-light me-2" to="/upload">Upload</Link>}
          <Link className="btn btn-light" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
