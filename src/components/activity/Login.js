import React from 'react'

function Login() {
  return (
    // Login
    <div class="container">
      <div class="login-form">
        <form action="{#}">
          <h1>Sign In</h1>
          <p>
            Already have an account? Login in or
            <a href="signup.html">Sign Up</a>
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

          <label>
            <input type="checkbox" checked="checked" name="remember" className="lbl-login"/>
            Remember me
          </label>

          <p>
            By creating an account you agree to our
            <a href="{#}">Terms & Privacy</a>.
          </p>

          <div class="buttons">
            <button type="submit" class="signupbtn">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login