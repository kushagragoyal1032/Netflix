import React from 'react'
import { TMD_IMG_URL } from '../../utils/constants'

const MovieCard = ({ posterPath }) => {
    const poster = posterPath ? TMD_IMG_URL + posterPath : "images/No_Image_Available.jpg";
    return (
        <div className='w-52 mr-5'>
            <img src= {poster} alt='poster' />
        </div>
    )
}

export default MovieCard