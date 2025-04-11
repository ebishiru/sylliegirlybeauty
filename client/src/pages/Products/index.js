import { useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Products = () => {
    const {products} = useContext(ProductsContext);
    
    const [ currentPage, setCurrentPage ] = useState(1);
    const productsPerPage = 30;

    const totalPages = Math.ceil(products.length / productsPerPage);

    const totalPagesArray = [];
    for (let i=1; i<= totalPages; i++) {
        totalPagesArray.push(i);
    }

    const startIndex = (currentPage - 1)*productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const reversedProducts = products.map((product, index) => {
        const reverseIndex = products.length - 1 - index;
        return products[reverseIndex];
    })
    const currentProducts = reversedProducts.slice(startIndex, endIndex);

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
            <h2>Syllie Recommended Products:</h2>
            <h3>Girly girls don't gatekeep!</h3>
            <ProductsContainer>
            { //Show all products in products
                currentProducts.length >= 1? (
                    currentProducts.map((product, index) => {
                        return (
                            <ProductCard key={index} productIndex={products.length - 1 - (startIndex + index)}/>
                        )
                    })
                ) : (
                    <p>Loading Products</p>
                )
            }
            </ProductsContainer>
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
            <h3>Don't forget to use my codes for more discounts.</h3>
            <h3>Codes are automatically applied on the links, or check out <a href="https://bio.site/sylliepie" target="_blank">my bio</a>!!</h3>
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