import React, { useState, useEffect } from 'react'
import image from '../../assets/images/showcase-1.back.jpg';
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
        alert("User created successfully");       
        
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
    // Container
    <div className="container mx-auto">
      <div className="flex justify-center px-6 my-12">
        {/* <!-- Row --> */}
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          {/* <!-- Col --> */}
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img src={image} alt="" />
          </div>
          {/* <!-- Col --> */}
          <div className="w-full lg:w-2/3 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-4xl text-center mb-8">SignUp To Your Account</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={e =>
                    setDataRegister({ ...dataRegister, name: e.target.value })
                  }
                  required/>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full h-12 px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={e =>
                    setDataRegister({...dataRegister, email: e.target.value})
                  }
                  required/>
              </div>
              <div className="mb-4">
                <label className="block mb-4 text-xl font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full h-12 px-3 py-2 mb-3 text-xl leading-tight text-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="psw"
                  placeholder="Password"
                  onChange={e =>
                    setDataRegister({...dataRegister, password: e.target.value})
                  }
                  required
                />
          
              </div>
              <div className="mb-6 text-center">
                <button type="submit" className="w-full px-4 py-2 font-light text-white bg-red rounded-full
                  hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  onClick={e => handleSubmit(e, 'register')}>
                  Sign Up
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link to="/signin" className="inline-block text-xl text-blue align-baseline hover:text-blue">
                  Sign In Account!
                </Link>
              </div>
          
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register