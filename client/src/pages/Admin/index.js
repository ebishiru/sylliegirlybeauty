import { useContext } from "react";
import { Link } from "react-router-dom"
import { ProductsContext } from "../../contexts/ProductsContext";
import AdminProductCard from "../Products/AdminProductCard";
import styled from "styled-components";

const Admin = () => {
    const { products } = useContext(ProductsContext);
    let maxIndex = 0;
    
    if (products.length >= 1) {
        maxIndex = products.length - 1;
    }
    return (
        <StyledPage>
            <h2>Admin Page</h2>
            <h3>Welcome Home Sylvia!!</h3>
            <ProductsContainer>
                    <StyledLink to="/admin/addProduct">
                        <p>+</p>
                    </StyledLink>
                    { //Show all products in products
                        products.length >= 1? (
                            products.map((product, index) => {
                                const reversedIndex = maxIndex - index;
                                return (
                                    <AdminProductCard key={index} productIndex={reversedIndex}/>
                                )
                            })
                        ) : (
                            <p>Loading Products</p>
                        )
                    }
            </ProductsContainer>
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