import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AuthContext } from '../../Provider/AuthProvider';


export default function Register() {

  const {createUser} = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleRegistration= e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-96 space-y-4 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Register Now!</h1>
                <form onSubmit={handleRegistration}>
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder=" Name" className="input input-bordered"  />
                  </div>
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Password</span>
                    </label>
                    <input type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                    <span  className='pointer text-right right-12  absolute  pt-12 text-2xl' onClick = { () => setShowPass(!showPass)}>
                      {
                          showPass ? <FiEye></FiEye> :  <FaRegEyeSlash></FaRegEyeSlash>
                      }
                    </span> <br/>
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p className='text-center'>Already have account? <Link className='text-purple-600 font-medium' to="/login">Login Now</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
