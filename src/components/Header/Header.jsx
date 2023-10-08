import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'

export default function Header() {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() => console.log('You are successfuly logout'))
        .catch(error => console.error(error))
    }

    const navlinks =<>
        <li ><Link className='bg-white font-medium text-black uppercase' to='/'>Home</Link></li>
        { user &&
            <li><Link className='bg-white font-medium text-black uppercase' to='/services'>Our Services</Link></li>
        }
        <li ><Link className='bg-white font-medium text-black uppercase' to='/about'>About US</Link></li>
        <li><Link className='bg-white font-medium text-black uppercase' to='/contact'>Contact Us</Link></li>        
    </>
  return (
    <div>
      <div className="navbar py-4 bg-white mx-auto w-[80%]">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navlinks}
            </ul>
            </div>
            <a href='/' className="font-bold text-primary uppercase text-3xl">GalaGlitz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu  menu-horizontal px-1">
            {navlinks}
            </ul>
        </div>
        <div className="navbar-end">
                {user ? (
                    <>
                      <span>{user.email}</span>
                      <button className="btn ml-4 text-white btn-primary" onClick={handleLogOut}>Sign Out</button>
                    </>
                  ) : (
                    <>
                      {/* <Link className='bg-white  hover:btn-primary border-primary hover:text-white btn font-medium text-primary uppercase' to='/register'>Register</Link> */}
                      <Link className='btn ml-4 text-white btn-primary' to='/login'>Log In</Link>
                    </>
                )}            
        </div>
        </div>
    </div>
  )
}
