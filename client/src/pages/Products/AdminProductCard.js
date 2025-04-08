import { useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import styled from "styled-components";

const AdminProductCard = ({productIndex}) => {
    const { products, updateProducts, setUpdateProducts } = useContext(ProductsContext);
    const [ status, setStatus ] = useState("idle");
    
    const handleDeletion = async (productId) => {
        setStatus("deleting")
        const productInfo = {
            _id: productId
        }
        const body = JSON.stringify( productInfo );
        const options = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body
        }
        try {
            const response = await fetch("/product", options);
            const data = await response.json();
            if (data.status !== 200) {
                console.log(`Could not delete product with Id:${productId}.`);
                setStatus("idle");
            } else {
                console.log("Product successfully deleted!");
                setUpdateProducts(updateProducts + 1);
                setStatus("idle");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {
                products.length >= 1 ? (
                    <StyledProductCard>
                        <img src={products[productIndex].src} alt={products[productIndex].name}/>
                        <DeleteButton disabled={status === "deleting"} onClick={()=>{
                            handleDeletion(products[productIndex]._id);
                        }}>X</DeleteButton>
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

export default AdminProductCard

const StyledProductCard = styled.div`
    max-width: 240px;
    border: 3px solid var(--color-lightgreen);
    border-radius: 10px;
    position: relative;
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
const DeleteButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    color: var(--color-white);
    background-color: var(--color-darkpink);
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: scale(0.9);
    }
    &:disabled {
        opacity: 0.5;
    }
`