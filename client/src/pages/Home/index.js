import { useContext } from "react";
import { Link } from "react-router-dom";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { ProductsContext } from "../../contexts/ProductsContext";
import VideoCard from "../Videos/VideoCard";
import ProductCard from "../Products/ProductCard";
import styled from "styled-components";
import { FaYoutube, FaInstagram, FaTiktok, FaUser, } from "react-icons/fa";

const Home = () => {
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    const { products } = useContext(ProductsContext);

    //Getting last three products that aren't hidden
    let lastThreeProducts = [];
    if (products) {
        const filteredProducts = products.filter((product) => product.toggleShow === "true");
        const end = filteredProducts.length;
        const start = end - 3;
        lastThreeProducts = filteredProducts.slice(start, end).reverse();
    }

    return (
        <>
            <TitleContainer>
                <img src="https://yt3.googleusercontent.com/sHK2nZs05z-H2L13puQh5BkqidXkIt85SsD3rNpMtPFxtmbtyc71JuL9LhCCA6uqYLZBdc94=s160-c-k-c0x00ffffff-no-rj" alt="Sylliepie"/>
                <TitleText>
                    <h1>Syllie 🍡 Girly Beauty</h1>
                    <p>hey girly girls, welcome back!!</p>
                    <IconsContainer>
                        <a href="https://www.tiktok.com/@sylliepie"><FaTiktok size={35} /></a>
                        <a href="https://www.instagram.com/sylliepie"><FaInstagram size={40} /></a>
                        <a href="https://www.youtube.com/@sylliepiee"><FaYoutube size={40} /></a>
                        <a href="https://bio.site/sylliepie"><FaUser size={35} /></a>
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
            <h3><StyledLink to={"/videos"}>For more videos, check them out here!!</StyledLink></h3>
            </VideosContainer>
            <ProductsContainer>
                <h2>Newest Product Recommendations:</h2>
                {
                products.length >= 1? (
                    <ProductCardContainer>
                        {
                            lastThreeProducts.map((product, index) => {
                                return <ProductCard key={index} productIndex={products.indexOf(product)} />
                            })
                        }
                    </ProductCardContainer>
                ) : (
                    <p>Loading products</p>
                )
                }
                <h3><StyledLink to={"/products"}>Click here for the full list of syllie approved products</StyledLink></h3>
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
        text-decoration: none;
        color: var(--color-darkpink);
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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--color-darkpink);
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