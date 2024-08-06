import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LANG } from '../../utils/langConstants';
import client from '../../utils/openApi';
import { API_OPTIONS } from '../../utils/constants';
import { addGptMovies } from '../../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const selectedLang = useSelector(store => store.lang.lang);
    const searchText = useRef();

    const handleTmdbSearch = async (movie) => {
        const res = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&language=en-US&page=1', API_OPTIONS);
        const data = await res.json();
        // console.log(data);
        return data.results;
    }

    const handleGpt = async () => {
        // const query = "Act as a Movie Rescommendation System and suggest some movies for query : " + searchText.current.value + " Only give 5 movies name, comma separated"
        // try {
        //     const gptResults = await client.chat.completions.create({
        //         messages: [{ role: 'user', content: query }],
        //         model: 'gpt-3.5movieResult
        //     });
        //     console.log(gptResults.choices);
        // } catch {
        //     console.log("error");
        // }
        const gptResults = ['Sholay', 'Dangal', 'Baahubali', '3 Idiots'];
        gptResults.unshift(searchText.current.value);
        const promiseList = gptResults.map((movie) => {
            return handleTmdbSearch(movie);
        })
        const movieObjectList = await Promise.all(promiseList);
        // console.log(movieObjectList);
        dispatch(addGptMovies({ movies: gptResults, movieResult: movieObjectList }))
    }
    return (
        <div className='pt-[10%] flex justify-center '>
            <form className='bg-black bg-opacity-70 p-6 grid grid-cols-12 w-full mx-3 md:w-1/2 mx-0' onSubmit={(e) => e.preventDefault()}>
                <input className='col-span-9 pl-2 rounded-sm border border-white-200 bg-gray-500 bg-opacity-60 text-white' type="text" placeholder={LANG?.[selectedLang]?.placeholder} ref={searchText} />
                <button className='col-span-3 ml-4 py-3 px-4 bg-red-700 text-white rounded-md' onClick={handleGpt}>{LANG?.[selectedLang]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar