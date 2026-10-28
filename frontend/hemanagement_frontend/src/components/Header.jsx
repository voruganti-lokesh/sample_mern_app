import { Link } from "react-router-dom";
import './header.css'
function Header() {
    return (
        <div className="header">
            <a href="/">Home</a>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">register</Link>

        </div>
    )
}
export default Header;
