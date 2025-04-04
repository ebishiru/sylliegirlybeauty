import { useContext } from "react"
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import styled from "styled-components";

const VideoCard = ({videoIndex}) => {
    const { youTubeVideos } = useContext(YouTubeVideosContext);

    return (
        <>
            {
                youTubeVideos.length >= 1 ? (
                        <StyledVideoCard>
                            <a href={`https://www.youtube.com/watch?v=${youTubeVideos[videoIndex].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[videoIndex].snippet.thumbnails.medium.url} alt={youTubeVideos[videoIndex].snippet.title}/>
                            </a>
                            <p>{youTubeVideos[videoIndex].snippet.title}</p>
                        </StyledVideoCard>
                ) : (
                    <p>Loading</p>
                )
            
            
            }
        </>
    )
}

export default VideoCard;

const StyledVideoCard = styled.div`
    max-width: 320px;
    & img {
        border-radius: 10px;
    }
`