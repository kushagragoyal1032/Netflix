import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const useTrailerVideo = (video_id) => {
    const [TrailerYoutubeId, setTrailerYoutubeId] = useState(null);

    const getVideoById = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${video_id}/videos`, API_OPTIONS);
        const data = await res.json();
        const filteredData = data?.results?.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : data?.results[0];
        setTrailerYoutubeId(trailer.key);
    }
    useEffect(() => {
        getVideoById();
    }, []);

    return TrailerYoutubeId;
}

export default useTrailerVideo;