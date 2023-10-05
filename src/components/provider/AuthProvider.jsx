import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // Create user/Register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // logout (fun)
    const logOut = () => {
        return signOut(auth);
    }
    // Login fun or sign in (fun)
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(()=>{
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the on state change', currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubsCribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;