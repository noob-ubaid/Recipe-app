import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true)
  
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth , email, password)
  };
  const register = (email , password) => {
    return createUserWithEmailAndPassword(auth , email , password)
  }
  const updateUser = updatedUserProfile => {
    return updateProfile(auth.currentUser , updatedUserProfile)
  }
  const logOut = () => {
    return signOut(auth)
  }
    const forgetPassword = email => {
    return sendPasswordResetEmail(auth, email)
  }
  const google =() => {
    const provider = new GoogleAuthProvider();
   return signInWithPopup(auth, provider)
  }
  useEffect(() => {
    const isUserLogin = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      isUserLogin();
    };
  }, []);
  const data = {
    logIn,
    register,
    forgetPassword ,
    logOut,
    loading,
    setLoading,
    user,
    updateUser,
    google,
    setUser
  };
  return <AuthContext value={data}>{children}</AuthContext>;
};

export default AuthProvider;
