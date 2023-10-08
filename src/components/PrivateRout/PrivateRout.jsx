import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRout({children}) {

    const{user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='py-10 text-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
  return <Navigate to='/login'></Navigate>
}
PrivateRout.PropTypes = {
    children: PropTypes.node,
}