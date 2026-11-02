import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login_page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");

    if (email === "admin@gmail.com" && password === "admin") {
    localStorage.setItem("currentUser", JSON.stringify({ "name": "Admin", "role": "admin" }))
      navigate("/adminhome");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/emp/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
     
      if (!response.ok || !data.user) {
        setError(data.message || "Login failed. Please try again.");
        return;
      }

      if (data.user.role === "HR") {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/hrhome");
      } else if (data.user.role === "EMPLOYEE") {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/emphome");
      } else {
        setError("Your account has an unsupported role.");
      }
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? loginError.message
          : "Unable to log in. Please try again.",
      );
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Emailid"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Login_page;