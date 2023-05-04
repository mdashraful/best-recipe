import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loader, useLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        useLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        useLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const googleLogin = () => {
        useLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        useLoader(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            useLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        updateUserProfile,
        logout,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;