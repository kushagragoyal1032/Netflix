import React from 'react'

const VideoTitle = ({ original_title, overview }) => {
    return (
        <div className='w-screen aspect-video absolute bg-gradient-to-r from-black pt-[10%] px-4 md:px-20 '>
            <h1 className='font-bold text-lg md:text-5xl text-white ' >
                {original_title}
            </h1>
            <p className='pt-2 text-white text-xs w-full md:text-lg md:pt-5 py-6 md:w-1/4'>
                {overview}
            </p>
            <div>
                <button className='bg-white p-2 px-6 md:text-xl text-md rounded-md hover:opacity-50 md:p-4 md:px-12'>Play</button>
                <button className='mx-2 bg-gray-500 bg-white bg-opacity-50 p-2 px-4 md:text-xl text-md rounded-md text-white md:p-4 md:px-12'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle