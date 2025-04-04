import { useParams } from "react-router-dom";
import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import styled from "styled-components";

const Video = () => {
    const {videoId} = useParams();
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    let youTubeVideo = undefined;

    if (youTubeVideos.length >= 1) {
        youTubeVideo = youTubeVideos.find((video) => {
            return video.snippet.resourceId.videoId === videoId;
        })
    }

    return (
        <StyledPage>
            {
                youTubeVideo ? (
                    <StyledVideoContainer>
                        <StyledIframe 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                            title={`${youTubeVideo.snippet.title}`} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </StyledIframe>
                        <p>{youTubeVideo.snippet.title}</p>
                    </StyledVideoContainer>
                ) : (
                    <p>Loading video</p>
                )
            }
            <h2>Mentioned Recommended Products:</h2>
        </StyledPage>
    )
}

export default Video;

const StyledPage = styled.div`
    padding: 0 5rem;
    & h2 {
        margin: 1rem 0;
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-darkgreen);
        text-shadow: 1px 1px var(--color-lightgreen);
    }
    & h3 {
        margin: 2rem 0;
        font-size: 1.5rem;
        font-weight: bold;
    }
`
const StyledVideoContainer = styled.div`
    max-width: 905px;
    & p {
        margin: 0.5rem;
        font-size: 1.25rem;
    }
`
const StyledIframe = styled.iframe`
    width: 905px; 
    height: 509px; 
    border-radius: 10px;
`