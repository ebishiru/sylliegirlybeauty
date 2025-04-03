import { useContext, useState } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext"

const Videos = () => {
    const { youTubeVideos } = useContext( YouTubeVideosContext);

    return (
        <>
            { //Show all videos in youTubeVideo
                youTubeVideos.length >= 1? (
                    youTubeVideos.map((youTubeVideo, index) => {
                        return (
                            <div key={index}>
                                <img src={youTubeVideo.snippet.thumbnails.medium.url} alt={youTubeVideo.snippet.title}/>
                                <p>{youTubeVideo.snippet.title}</p>
                            </div>
                        )
                    })
                ) : (
                    <p>Loading Videos</p>
                )
            }
        </>
    )
}

export default Videos;