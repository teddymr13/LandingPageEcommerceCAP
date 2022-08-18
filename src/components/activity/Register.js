import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, registerWithEmailAndPassword} from '../../firebase/configFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function Register() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const [dataRegister, setDataRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  // handle the form data
  const handleSubmit = async (e, params) => {
      e.preventDefault();
      if (params === 'register') {
        await registerWithEmailAndPassword(
          dataRegister.name,
          dataRegister.email,
          dataRegister.password
        );
        alert('User created successfully');
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
          <h1>Sign Up</h1>
          <p>
            Please fill in this form to create an account. or
            <Link to="/signin"> Sign In</Link>
          </p>
          
          <label for="email">Name</label>
          <input type="text" placeholder="Name" name="name" required 
              onChange={e =>
                setDataRegister({ ...dataRegister, name: e.target.value })
              }
           />


          <label for="email">Email</label>
          <input type="text" placeholder="Email" name="email" required 
             onChange={e =>
                setDataRegister({...dataRegister, email: e.target.value})
              }
          />

          <label for="psw">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            required
            onChange={e =>
              setDataRegister({...dataRegister, password: e.target.value})}
          />

          <div className="buttons">
            <button type="submit" className="signupbtn" onClick={e => handleSubmit(e, 'register')}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register