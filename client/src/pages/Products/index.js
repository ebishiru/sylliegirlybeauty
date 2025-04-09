import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Products = () => {
    const {products} = useContext(ProductsContext);
    let maxIndex = 0;
    
    if (products.length >= 1) {
        maxIndex = products.length - 1;
    }

    return (
        <StyledPage>
            <h2>Syllie Recommended Products</h2>
            <h3>Girly girls don't gatekeep!</h3>
            <ProductsContainer>
            { //Show all products in products
                products.length >= 1? (
                    products.map((product, index) => {
                        const reversedIndex = maxIndex - index;
                        return (
                            <ProductCard key={index} productIndex={reversedIndex}/>
                        )
                    })
                ) : (
                    <p>Loading Products</p>
                )
            }
            </ProductsContainer>
            <h3><a href="https://bio.site/sylliepie">Don't forget to use my codes for more discounts!!</a></h3>
        </StyledPage>
    )
}

export default Products;

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
        & a {
        text-decoration: none;
        color: var(--color-darkpink);
        }
    }
`

const ProductsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

