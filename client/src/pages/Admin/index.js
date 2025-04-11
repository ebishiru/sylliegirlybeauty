import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ProductsContext } from "../../contexts/ProductsContext";
import { AdminContext } from "../../contexts/AdminContext";
import AdminProductCard from "../Products/AdminProductCard";
import styled from "styled-components";

const Admin = () => {
    const navigate = useNavigate();
    const { products } = useContext(ProductsContext);
    const { adminAccess } = useContext(AdminContext);

    const [ currentPage, setCurrentPage ] = useState(1);
    const productsPerPage = 29;

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

    //Verify that user is logged in
    if (!adminAccess) {
        return navigate("/");
    }
    
    return (
        <StyledPage>
            <h2>Admin Controls</h2>
            <h3>Welcome Home Sylvia!!</h3>
            <ProductsContainer>
                    <StyledLink to="/admin/addProduct">
                        <p>+</p>
                    </StyledLink>
                    { //Show all products in products
                        currentProducts.length >= 1? (
                            currentProducts.map((product, index) => {
                                return (
                                    <AdminProductCard key={index} productIndex={products.length - 1 - (startIndex + index)}/>
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
        </StyledPage>
    )
}

export default Admin;

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
const ProductsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`
const StyledLink = styled(Link)`
    width: 240px;
    min-height: 240px;
    border: 3px solid var(--color-lightgreen);
    border-radius: 10px; 
    text-decoration: none;
    color: var(--color-darkgreen);
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;

    & p {
        font-size: 5rem;
    }

    &:hover {
        opacity: 1;
    }
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