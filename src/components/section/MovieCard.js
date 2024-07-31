import React from 'react'
import { TMD_IMG_URL } from '../../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-52 mr-5'>
            <img src={TMD_IMG_URL + posterPath} alt='poster' />
        </div>
    )
}

export default MovieCard