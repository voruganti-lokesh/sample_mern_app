import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        event.preventDefault()
        setMessage("")

        try {
            const response = await fetch("http://localhost:3000/api/emp/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.message || "Login failed. Please try again.")
            }

            if (result.msg === "login successful") {
                navigate("/adminhome")
            } else {
                setMessage(result.msg === "user not found"
                    ? "No account was found for that email."
                    : "Invalid email or password.")
            }
        } catch (error) {
            setMessage(error instanceof Error
                ? error.message
                : "Unable to connect to the server. Please try again.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    placeholder="Enter email"
                    required
                />
                <br />
                <input
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder="Enter password"
                    required
                />
                <br />
                <button type="submit">Login</button>
            </form>
            {message && <p role="alert">{message}</p>}
        </div>
    )
}

export default Login
