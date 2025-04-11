import { useContext, useState } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext"
import VideoCard from "./VideoCard";
import styled from "styled-components";

const Videos = () => {
    const { youTubeVideos } = useContext( YouTubeVideosContext);

    const [ currentPage, setCurrentPage ] = useState(1);
    const videosPerPage = 20;
    
    const totalPages = Math.ceil(youTubeVideos.length / videosPerPage);

    const totalPagesArray = [];
    for (let i=1; i<= totalPages; i++) {
        totalPagesArray.push(i);
    }

    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const currentYouTubeVideos = youTubeVideos.slice(startIndex, endIndex);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage( currentPage - 1);
        }
    }
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage( currentPage + 1);
        }
    }
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <StyledPage>
            <h2>YouTube Videos:</h2>
            
            <VideosContainer>
            { //Show all videos in youTubeVideo
                youTubeVideos.length >= 1? (
                    currentYouTubeVideos.map((youTubeVideo, index) => {
                        return (
                            <VideoCard key={index + startIndex} videoIndex={index + startIndex} />
                        )
                    })
                ) : (
                    <p>Loading Videos</p>
                )
            }
            </VideosContainer>
            <PaginationContainer>
                <StyledButton disabled={currentPage === 1} onClick={goToPreviousPage} >Previous</StyledButton>
                {
                    totalPagesArray.map((page) => {
                        return (
                            <button key={page} onClick={() => {goToPage(page)}} className={currentPage === page? "active" : ""}>{page}</button>
                        )
                    })
                }
                <StyledButton disabled={currentPage === totalPages} onClick={goToNextPage} >Next</StyledButton>
            </PaginationContainer>
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

const PaginationContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 2rem;
    
    & button {
        font-family: "Yeseva One", serif;
	    font-weight: 400;
	    font-style: normal;
        padding: 0.25rem 1rem;
        border: 0.1rem solid var(--color-darkgreen);
        border-radius: 10px;
        color: var(--color-white);
        background-color: var(--color-darkgreen);
        text-transform: uppercase;
        cursor: pointer;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    & button.active {
            color: var(--color-darkgreen);
            background-color: var(--color-white);
        }
`


const StyledButton = styled.button`
    width: 8rem;
    font-size: 1rem;
`