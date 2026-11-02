import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser") ||
        localStorage.getItem("user") ||
        "null"
    );
    const role = currentUser?.role?.toLowerCase();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {!currentUser && (
                <div>
                    <Link to="/services">Services</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            )}
            {role === "hr" && (
                <div>
                    <Link to="#">Assign task</Link>
                    <Link to="#">View employees</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            {role === "employee" && (
                <div>
                    <Link to="#">View tasks</Link>
                    <Link to="#">Add todo</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            {role === "admin" && (
                <div>
                    <Link to="#">View employees</Link>
                    <Link to="#">View tasks</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Header;