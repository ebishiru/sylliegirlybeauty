import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext";
import styled from "styled-components";

const Products = () => {
    const {products} = useContext(ProductsContext);
    
    return (
        <>
            <h2>Syllie Recommended Products</h2>
            <p>Girly girls don't gatekeep!</p>
            <ProductsContainer>
            { //Show all products in products
                products.length >= 1? (
                    products.map((product,index) => {
                        return (
                            <ProductCard key={index}>
                                <img src={product.src} alt={product.name}/>
                                <p>{product.brand}</p>
                                <p>{product.name}</p>
                                {
                                    product.storeUrls.map((url, index)=>{
                                        return (
                                            <span key={index}>Store Page</span>
                                        )
                                    })
                                }
                            </ProductCard>
                        )
                    })
                    
                ) : (
                    <p>Loading Products</p>
                )
            }
            </ProductsContainer>
        </>
    )
}

export default Products;

const ProductsContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

const ProductCard = styled.div`
    width: 7rem;
    height: 15rem;
    border: 1px solid red;

    & img {
        width: 95%;
        height: auto;
    }
`