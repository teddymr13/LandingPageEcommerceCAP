import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
} from '../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Login() {
  const [dataLogin, setDataLogin] = useState({ email: '', password: '' });
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log("auth-users", user);
  

  const handleSubmit = async (e, params) => {
    e.preventDefault();
    if (params === 'login') {
      await logInWithEmailAndPassword(dataLogin.email, dataLogin.password);
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);

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
          <input type="text" placeholder="Email" name="email" required 
            onChange={e =>
                      setDataLogin({ ...dataLogin, email: e.target.value })
                    }
           />

          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            required
            onChange={e =>
                      setDataLogin({ ...dataLogin, password: e.target.value })
              }
          />
          
          <div className="buttons">
            <button type="submit" className="signupbtn" onClick={(e) => handleSubmit(e, "login")}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login