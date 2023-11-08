import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password, displayName) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName);
       
    }
   
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const [userInfo, setUserInfo] = useState(null);
    const provider = new GoogleAuthProvider();  

        const handleGoogle = () =>{
            signInWithPopup(auth,provider)
            .then(result => {
                const user = result.user;
                setUserInfo(user);
                {
                    user && '/'
                }
              })
              .catch(error =>{
                console.log('error', error.message);
              })
        }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser);
            console.log('user create', currentUser);
            setLoading(false);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser, { withCredentials: true })
                .then(res => {
                    console.log("token",res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        handleGoogle
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;