import React from 'react'
import { useSelector } from 'react-redux'
import { LANG } from '../../utils/langConstants';

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.lang.lang);
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='bg-black bg-opacity-80 p-6 w-1/2 grid grid-cols-12'>
                <input className='col-span-9 pl-2 rounded-sm border border-white-200 bg-gray-500 bg-opacity-60 text-white' type="text" placeholder={LANG?.[selectedLang]?.placeholder} />
                <button className='col-span-3 ml-4 py-3 px-4 bg-red-700 text-white rounded-md'>{LANG?.[selectedLang]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar