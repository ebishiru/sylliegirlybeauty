import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import styled from "styled-components";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

const Home = () => {
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    const { products } = useContext(ProductsContext);
    let maxProductIndex = 0;

    if ( products.length >= 1) {
        maxProductIndex = products.length - 1;
    }

    return (
        <>
            <TitleContainer>
                <img src="https://yt3.googleusercontent.com/sHK2nZs05z-H2L13puQh5BkqidXkIt85SsD3rNpMtPFxtmbtyc71JuL9LhCCA6uqYLZBdc94=s160-c-k-c0x00ffffff-no-rj" alt="Sylliepie"/>
                <TitleText>
                    <h1>Syllie 🍡 Girly Beauty</h1>
                    <p>hey girly girls, welcome back!!</p>
                    <IconsContainer>
                        <a><FaTiktok size={35} /></a>
                        <a><FaInstagram size={40} /></a>
                        <a><FaYoutube size={40} /></a>
                    </IconsContainer>
                </TitleText>
            </TitleContainer>
            <VideosContainer>
            <h2>Latest YouTube Videos:</h2>
            {
                youTubeVideos.length >= 1? (
                    <VideoCardContainer>
                        <VideoCard>
                            <a href={`https://www.youtube.com/watch?v=${youTubeVideos[0].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[0].snippet.thumbnails.medium.url} alt={youTubeVideos[0].snippet.title}/>
                            </a>
                            <p>{youTubeVideos[0].snippet.title}</p>
                        </VideoCard>
                        <VideoCard>
                            <a href={`https://www.youtube.com/watch?v=${youTubeVideos[1].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[1].snippet.thumbnails.medium.url} alt={youTubeVideos[1].snippet.title}/>
                            </a>
                            <p>{youTubeVideos[1].snippet.title}</p>
                        </VideoCard>
                        <VideoCard>
                            <a href={`https://www.youtube.com/watch?v=${youTubeVideos[2].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[2].snippet.thumbnails.medium.url} alt={youTubeVideos[2].snippet.title}/>
                            </a>
                            <p>{youTubeVideos[2].snippet.title}</p>
                        </VideoCard>
                        <VideoCard>
                            <a href={`https://www.youtube.com/watch?v=${youTubeVideos[3].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[3].snippet.thumbnails.medium.url} alt={youTubeVideos[3].snippet.title}/>
                            </a>
                            <p>{youTubeVideos[3].snippet.title}</p>
                        </VideoCard>
                        
                    </VideoCardContainer>
                    
                ) : (
                    <p>Loading videos</p>
                )
            }
            <h3>For more videos, check them out on Youtube</h3>
            </VideosContainer>
            <ProductsContainer>
                <h2>Newest Product Recommendations:</h2>
                {
                products.length >= 1? (
                    <ProductCardContainer>
                        <ProductCard>
                            <img src={products[maxProductIndex].src} alt={products[maxProductIndex].brand}/>
                            <p>{products[maxProductIndex].brand}</p>
                            <p>{products[maxProductIndex].name}</p>
                            <UrlContainer>
                            {
                                products[maxProductIndex].storeUrls.map((url, index)=>{
                                        return (
                                            <span key={index}><a href={url} target="_blank">{`Link${index+1}`}</a></span>
                                        )
                                    })
                            }
                            </UrlContainer>
                        </ProductCard>
                        <ProductCard>
                            <img src={products[maxProductIndex - 1].src} alt={products[maxProductIndex - 1].brand}/>
                            <p>{products[maxProductIndex - 1].brand}</p>
                            <p>{products[maxProductIndex - 1].name}</p>
                            <UrlContainer>
                            {
                                products[maxProductIndex - 1].storeUrls.map((url, index)=>{
                                        return (
                                            <span key={index}><a href={url} target="_blank">{`Link${index+1}`}</a></span>
                                        )
                                    })
                            }
                            </UrlContainer>
                        </ProductCard>
                        <ProductCard>
                            <img src={products[maxProductIndex - 2].src} alt={products[maxProductIndex - 2].brand}/>
                            <p>{products[maxProductIndex - 2].brand}</p>
                            <p>{products[maxProductIndex - 2].name}</p>
                            <UrlContainer>
                            {
                                products[maxProductIndex - 2].storeUrls.map((url, index)=>{
                                        return (
                                            <span key={index}><a href={url} target="_blank">{`Link${index+1}`}</a></span>
                                        )
                                    })
                            }
                            </UrlContainer>
                        </ProductCard>
                    </ProductCardContainer>
                ) : (
                    <p>Loading products</p>
                )
                }
                <h3>Click here for the full list of products</h3>
            </ProductsContainer>
            
        </>
    )
}

export default Home;

const TitleContainer = styled.div`
    margin: 0 5rem 1rem;
    height: 160px;
    max-width: 35rem;
    border: 3px solid var(--color-darkpink);
    border-radius: 100px;
    display: flex;
    align-items: center;
    font-weight: bold;
    & img {
        margin: 0;
        border-radius: 50%;
    }
`
const TitleText = styled.div`
    & h1 {
        margin: 0.5rem;
        font-size: 2rem;
        font-style: italic;
        text-shadow: 1px 1px var(--color-pink);
    }
    & p {
        margin: 1rem 0.5rem;
        font-size: 1.5rem;
    }
`
const IconsContainer = styled.div`
    display: flex;
    & a {
        margin: 0 0.5rem;
    }
`
const VideosContainer = styled.div`
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
const VideoCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
const VideoCard = styled.div`
    max-width: 320px;

    & img {
        border-radius: 10px;
    }
`
const ProductsContainer = styled.div`
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
const ProductCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`
const ProductCard = styled.div`
    max-width: 240px;
    border: 3px solid var(--color-lightgreen);
    border-radius: 10px;
    & img {
        width: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    & p {
        margin: 0.5rem;
    }
    & a {
        padding: 0 0.5rem;
        border-radius: 10px;
        color: var(--color-white);
        background-color: var(--color-darkgreen);
        text-decoration: none;
    }
`
const UrlContainer = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: space-evenly;
`