import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photo) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photo ? photo : null
            });

            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const updateUserInfo = async (name, photoURL) => {
        try {
            await updateProfile(auth.currentUser, { displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });
        } catch (error) {
            console.error('Error updating user info:', error.message);
            throw error;
        }
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    const signInWithGithub = async () => {
        setLoading(true);
        try {
            const provider = new GithubAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            setUser(userCredential.user);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user.email;
            const loggedUser = { email: userEmail };
           // console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {

                axios.post('https://assignment11server-ssimunis-projects.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                     //   console.log(res.data);
                    })
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user, loading, createUser, signIn, logOut, signInWithGoogle,
        signInWithGithub, updateUserInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider