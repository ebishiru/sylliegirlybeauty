import { createContext, useState, useEffect } from 'react';

export const YouTubeVideosContext = createContext();

const YouTubeVideosProvider = ({children}) => {
    const [ youTubeVideos, setYouTubeVideos ] = useState([]);

    useEffect(()=>{
        const fetchYouTubeVideos = async () => {
            try {
                const response = await fetch("https://sylliegirlybeauty.onrender.com/youtubevideos");
                const { data } = await response.json();
                setYouTubeVideos(data);
            } catch (error) {
                console.error("Error fetching YouTube videos", error);
            }
        };
        fetchYouTubeVideos();
    },[]);

    return (
        <YouTubeVideosContext.Provider value={{ youTubeVideos }}>
            {children}
        </YouTubeVideosContext.Provider>
    )
}

export default YouTubeVideosProvider;