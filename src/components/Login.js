import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/appSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [signIn, setSignIn] = useState(true);
    const [errmessage, setErrMessage] = useState(null);
    const displayname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const formtoggle = () => {
        setSignIn(!signIn);
    }
    const buttonHandler = () => {
        // console.log(email.current.value, password.current.value);
        const validatemessage = checkValidData(email.current.value, password.current.value);
        setErrMessage(validatemessage);
        if (validatemessage) return;
        if (!signIn) { // check signup form or sign in form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: displayname.current.value, photoURL: "images/netflix-profile-pictures.jpg"
                    }).then(() => {
                        // update store again to update displayname and photoURL bcz it does not trigger onAuthStateChanged
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        console.log("update profile image and name");
                    }).catch((error) => {
                        setErrMessage(error.message);
                    });
                    console.log("user", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + errorMessage);
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("user", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorMessage);
                });
        }
    }
    return (
        <div className='login'>
            <Header />
            <div className="bg-img absolute">
                <img src="images/NetfixBackground.jpg" alt="bg" />
            </div>
            <div className='absolute bg-black bg-opacity-80 p-8 w-3/12 mx-auto my-36 right-0 left-0  text-white'>
                <h2 className="font-bold text-white text-3xl">{signIn ? "Sign In" : "Sign Up"}</h2>
                <form className='mt-5 flex flex-col rounded-md' onSubmit={(e) => e.preventDefault()}>
                    {!signIn && <input
                        type="text"
                        className='my-2 py-4 px-2 rounded-sm border border-white-200 bg-slate-600 bg-opacity-60 text-white'
                        placeholder='Name'
                        ref={displayname} />}
                    <input
                        type="text"
                        className='my-2 py-4 px-2 rounded-sm border border-white-200 bg-slate-600 bg-opacity-60 text-white'
                        placeholder='Email or mobile number'
                        ref={email} />
                    <input type="password"
                        className='my-2 py-4 px-2 rounded-sm border border-white-200 bg-slate-600 bg-opacity-60 text-white'
                        placeholder='Password'
                        ref={password} />
                    <p className='text-red-700'>{errmessage}</p>
                    <button
                        className='m-4 py-2 mx-0 bg-red-700 text-white rounded-sm'
                        onClick={buttonHandler}>{signIn ? "Sign In" : "Sign Up"}</button>
                    <p className='py-5 mt-4'>{signIn ? "New to Netflix?" : "Already LoggedIn?"}<b onClick={formtoggle} className='cursor-pointer'>{signIn ? " Sign Up now" : " Sign In now"}. </b></p>
                </form>
            </div>
        </div>
    )
}

export default Login