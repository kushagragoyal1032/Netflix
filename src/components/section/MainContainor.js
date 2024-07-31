import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const MainContainor = () => {
    const movies = useSelector((store) => store.movie?.movies);
    if (movies == null) return; // early return
    const mainMovie = movies[1];
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle original_title={original_title} overview={overview} />
            <VideoBackground video_id={id} />
        </div>
    )
}

export default MainContainor