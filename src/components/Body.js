import React from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/appSlice';
import { auth } from '../utils/firebase';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 'onAuthStateChanged' is inbuild func in firebase work like as event listener when auth state changes and on every first render
    useEffect(() => {
        // onAuthStateChanged return unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/login");
            }
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <Outlet />
    )
}

export default Body