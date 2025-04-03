import { useContext } from "react";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { ProductsContext } from "../../contexts/ProductsContext";

const Home = () => {
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    const { products } = useContext(ProductsContext);    
    return (
        <>
            <h2>Syllie 🍡 Girly Beauty Webpage</h2>
            <p>Hey Girly girls, </p>

            <p>Latest Featured Videos On Youtube:</p>
            {
                youTubeVideos.length >= 1? (
                    <>
                        <a href={`https://www.youtube.com/watch?v=${youTubeVideos[0].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[0].snippet.thumbnails.medium.url} alt="Feature Video 1"/>
                        </a>
                        <p>{youTubeVideos[0].snippet.title}</p>
                        <a href={`https://www.youtube.com/watch?v=${youTubeVideos[1].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[1].snippet.thumbnails.medium.url} alt="Feature Video 2"/>
                        </a>
                        <p>{youTubeVideos[1].snippet.title}</p>
                        <a href={`https://www.youtube.com/watch?v=${youTubeVideos[2].snippet.resourceId.videoId}`}>
                            <img src={youTubeVideos[2].snippet.thumbnails.medium.url} alt="Feature Video 3"/>
                        </a>
                        <p>{youTubeVideos[2].snippet.title}</p>
                    </>
                    
                ) : (
                    <p>Loading videos</p>
                )
            }
            <p>For more videos, check them out on Youtube</p>

            <p>Newest Product Recommendations:</p>
            {
                products.length >= 1? (
                    <>
                        <img src={products[0].src} alt="Picture of product 1"/>
                        <p>{products[0].name}</p>
                        <p>{products[0].brand}</p>
                        <p>{products[0].storeUrls[0]}</p>
                        <img src={products[1].src} alt="Picture of product 2"/>
                        <p>{products[1].name}</p>
                        <p>{products[1].brand}</p>
                        <p>{products[1].storeUrls[1]}</p>
                    </>
                ) : (
                    <p>Loading products</p>
                )
            }

            <p>Click here for the full list of products</p>
        </>
    )
}

export default Home;