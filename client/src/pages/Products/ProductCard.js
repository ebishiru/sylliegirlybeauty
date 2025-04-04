import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import styled from "styled-components";

const ProductCard = ({productIndex}) => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            {
                products.length >= 1 ? (
                    <StyledProductCard>
                        <img src={products[productIndex].src} alt={products[productIndex].name}/>
                        <p>{products[productIndex].brand}</p>
                        <p>{products[productIndex].name}</p>
                        <UrlContainer>
                            {
                                products[productIndex].storeUrls.map((url, index)=>{
                                    return (
                                        <span key={index}><a href={url} target="_blank">{`Link${index+1}`}</a></span>
                                    )
                                })
                            }
                        </UrlContainer>
                    </StyledProductCard>
                ) : (
                    <p>Loading</p>
                )
            
            
            }
        </>
    )
}

export default ProductCard

const StyledProductCard = styled.div`
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
