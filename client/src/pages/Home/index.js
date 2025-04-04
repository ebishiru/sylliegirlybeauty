import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import VideoCard from "../Videos/VideoCard";
import ProductCard from "../Products/ProductCard";
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
                        <VideoCard videoIndex="0"/>
                        <VideoCard videoIndex="1"/>
                        <VideoCard videoIndex="2"/>
                        <VideoCard videoIndex="3"/>
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
                        <ProductCard productIndex={maxProductIndex}/>
                        <ProductCard productIndex={maxProductIndex - 1}/>
                        <ProductCard productIndex={maxProductIndex - 2}/>
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