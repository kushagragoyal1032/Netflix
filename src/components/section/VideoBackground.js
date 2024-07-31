import React from 'react'
import useTrailerVideo from '../../hooks/useTrailerVideo'

const VideoBackground = ({ video_id }) => {
    const TrailerYoutubeId = useTrailerVideo(video_id);

    return (
        <div>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + TrailerYoutubeId + "?autoplay=1&mute=1&controls=0"}
                title="YouTube video player" />
        </div>

    )
}

export default VideoBackground