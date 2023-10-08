import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { AuthContext } from '../../Provider/AuthProvider';

export default function Login() {

  const {signInUser} = useContext(AuthContext) ;
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate()

  const handleLognIn= e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    signInUser(email, password)
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
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold">Login Now!</h1>
                <form onSubmit={handleLognIn}>
                    <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
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
                    <input type="submit" className='btn btn-primary' value="Login Now" />
                  </div>
                </form>
                <p className='text-center'>Are you haven't any account? <Link className='text-purple-600 font-medium' to="/register">Register Now</Link></p>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
