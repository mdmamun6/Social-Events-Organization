import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

export default function AuthProvider ({children}) {

    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSbscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        });
        return () =>{
            unSbscribe();
        }
    },[])

    const authInfo = {
        user, 
        createUser, 
        signInUser,
        logOut,
        loading
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

AuthProvider.PropTypes = {
    children: PropTypes.node,
}