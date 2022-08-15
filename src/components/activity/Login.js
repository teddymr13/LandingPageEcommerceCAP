import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container">
      <div className="login-form">
        <form action="{#}">
          <h1>Sign In</h1>
          <p>
            Already have an account? Login in or
            <Link to="/signup"> Sign Up</Link>
          </p>

          <label for="email">Email</label>
          <input type="text" placeholder="Email" name="email" required />

          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            required
          />
          
          <div className="buttons">
            <button type="submit" className="signupbtn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login