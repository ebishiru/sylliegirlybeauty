import { useContext } from "react"
import { Link } from "react-router-dom";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import styled from "styled-components";

const VideoCard = ({videoIndex}) => {
    const { youTubeVideos } = useContext(YouTubeVideosContext);

    return (
        <>
            {
                youTubeVideos.length >= 1 ? (
                        <StyledVideoCard>
                            <Link to={`/video/${youTubeVideos[videoIndex].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[videoIndex].snippet.thumbnails.medium.url} alt={youTubeVideos[videoIndex].snippet.title}/>
                            <p>{youTubeVideos[videoIndex].snippet.title}</p>
                            </Link>
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
    & a {
        color: var(--color-darkpink);
        text-decoration: none;
    }
    & img {
        border-radius: 10px;
    }

`