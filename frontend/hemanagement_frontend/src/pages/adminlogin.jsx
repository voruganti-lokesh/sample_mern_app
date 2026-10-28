import { useState } from "react"
import { useNavigate } from "react-router-dom"


function AdminLogin() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  

  let navigate = useNavigate();
  const Login = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/adminhome");
    } else {
        setError("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={Login}>
        <input type="text"placeholder="Enter username"value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Admin Login</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default AdminLogin;