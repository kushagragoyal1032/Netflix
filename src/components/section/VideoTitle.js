import React from 'react'

const VideoTitle = ({ original_title, overview }) => {
    return (
        <div className='w-screen  aspect-video pt-[15%] px-20 absolute bg-gradient-to-r from-black '>
            <h1 className='font-bold text-5xl text-white' >
                {original_title}
            </h1>
            <p className='py-6 text-lg w-1/4 text-white'>
                {overview}
            </p>
            <div>
                <button className='bg-white p-4 px-12 text-xl rounded-md hover:opacity-50 '>Play</button>
                <button className='mx-2 bg-gray-500 bg-white bg-opacity-50 p-4 px-12 text-xl rounded-md text-white'>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle