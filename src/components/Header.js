import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearchView } from '../utils/gptSlice';
import { LANGSELECTOR } from '../utils/langConstants';
import { chnageLanguage } from '../utils/configSlice';

const Header = () => {
    const user = useSelector((store) => store.user.userData);
    const showgptsearch = useSelector((store) => store.gpt.showSearchView);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log("Signd out");
        }).catch((error) => {
            navigate("/error");
        });
    }
    const handleSearch = () => {
        dispatch(toggleSearchView());
    }

    const langHandler = (e) => {
        dispatch(chnageLanguage(e.target.value));
    }
    return (
        <div className='absolute bg-gradient-to-b from-black w-full p-2 z-10 justify-between flex flex-col mx-auto md:flex-row'>
            <img className="h-10 m-6 md:ml-36 mx-auto md:mx-6" src='images/pngwing.com.png' alt='netflix' />
            {user && <div className='flex my-auto justify-center md:mr-20'>
                {showgptsearch && <select className='bg-black text-white' onChange={langHandler}>
                    {LANGSELECTOR.map(lang => (
                        <option key={lang.identifire} value={lang.identifire} >{lang.name}</option>
                    ))}
                </select>}
                <img className="h-10 px-4" src={user?.photoURL} alt='user' />
                <button className='bg-red-500 px-2 bg-gradient-to-tr text-white mr-3' onClick={handleSearch}>{showgptsearch ? "Home Page" : "GPT Search"}</button>
                <button className='text-white font-bold p-2 px-3 bg-red-600' onClick={handleSignOut}>{("Sign Out")}</button>
            </div>}
        </div>
    )
}

export default Header