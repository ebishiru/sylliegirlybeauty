import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext"
import VideoCard from "./VideoCard";
import styled from "styled-components";

const Videos = () => {
    const { youTubeVideos } = useContext( YouTubeVideosContext);

    return (
        <StyledPage>
            <h2>YouTube Videos:</h2>
            
            <VideosContainer>
            { //Show all videos in youTubeVideo
                youTubeVideos.length >= 1? (
                    youTubeVideos.map((youTubeVideo, index) => {
                        return (
                            <VideoCard key={index} videoIndex={index} />
                        )
                    })
                ) : (
                    <p>Loading Videos</p>
                )
            }
            </VideosContainer>
            <h3>If you're looking for even more videos, check out my YouTube!</h3>
        </StyledPage>
    )
}

export default Videos;

const StyledPage = styled.div`
    margin: 2rem 0;
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

const VideosContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`