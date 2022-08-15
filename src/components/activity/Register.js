import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className="container">
      <div className="login-form">
        <form action="{#}">
          <h1>Sign Up</h1>
          <p>
            Please fill in this form to create an account. or
            <Link to="/signin"> Sign In</Link>
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

          <label for="psw-repeat">Repeat Password</label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
          />

          <div className="buttons">
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register