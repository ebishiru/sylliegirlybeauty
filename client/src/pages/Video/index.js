import { useParams } from "react-router-dom";
import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../Products/ProductCard";
import styled from "styled-components";

const Video = () => {
    const {videoId} = useParams();
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    const { products } = useContext(ProductsContext);
    let youTubeVideo = undefined;

    if (youTubeVideos.length >= 1) {
        youTubeVideo = youTubeVideos.find((video) => {
            return video.snippet.resourceId.videoId === videoId;
        })
    }

    const mentionedProducts = products.filter((product)=>{
        return product.linkedVideos.includes(videoId);
    })

    return (
        <StyledPage>
            {
                youTubeVideo ? (
                    <StyledVideoContainer>
                        <h2>{youTubeVideo.snippet.title}</h2>
                        <StyledIframe 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                            title={`${youTubeVideo.snippet.title}`} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen>
                        </StyledIframe>
                    </StyledVideoContainer>
                ) : (
                    <p>Loading video</p>
                )
            }
            {
                mentionedProducts.length >= 1 ? (
                    <>
                        <h2>Mentioned Recommended Products:</h2>
                        <ProductCardContainer>
                        {
                            products.map((product, index)=>{
                                if (product.linkedVideos.includes(videoId)) {
                                    return <ProductCard productIndex={index} key={index}></ProductCard>
                                }
                            })
                        }
                        </ProductCardContainer>
                    </>
                ) : (
                    <></>
                )
            }
            
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
`
const StyledIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 10px;
`
const ProductCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`