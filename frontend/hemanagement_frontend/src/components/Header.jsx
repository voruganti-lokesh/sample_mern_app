import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header d-flex justify-content-center gap-3 align-items-center p-3">
      <Link to="/" className="text-decoration-none text-dark">Home</Link>
      <Link to="/about" className="text-decoration-none text-dark">About</Link>
      <Link to="/contact" className="text-decoration-none text-dark">Contact</Link>
      <Link to="/adminlogin" className="text-decoration-none text-dark">AdminLogin</Link>
    </div>
  );
}

export default Header;