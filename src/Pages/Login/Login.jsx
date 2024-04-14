//Login.jsx
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you can perform your authentication logic
        // For simplicity, let's compare the entered username and password with hardcoded values
        if (username === 'admin' && password === 'password') {
            // If authentication is successful, set loggedIn to true
            setLoggedIn(true);
        } else {
            // If authentication fails, you can display an error message or handle it as needed
            alert('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            {!loggedIn ? (
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            ) : (
                <div>
                    <p>You are logged in as admin.</p>
                    {/* Here you can render your admin content */}
                </div>
            )}
        </div>
    );
};

export default Login;
