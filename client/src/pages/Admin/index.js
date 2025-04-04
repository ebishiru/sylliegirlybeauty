import { useState, useContext, use } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import styled from "styled-components";

const Admin = () => {
    const { updateProducts, setUpdateProducts } = useContext(ProductsContext);

    const [ inputProduct, setInputProduct ] = useState("");
    const [ inputBrand, setInputBrand ] = useState("");
    const [ inputStoreUrls, setInputStoreUrls ] = useState("");
    const [ inputSrc, setInputSrc ] = useState("");
    const [ status, setStatus ] = useState("idle");
    const [ errorMessage, setErrorMessage ] = useState("");
    
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setStatus("processing");
        setErrorMessage("");
        // Splitting up all store links into an array
        const inputStoreUrlsArray = inputStoreUrls.split(" ");
        const productData = {
            name: inputProduct,
            brand: inputBrand,
            storeUrls: inputStoreUrlsArray,
            src: inputSrc
        }
        const body = JSON.stringify( productData );
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body
        }
        try {
            const response = await fetch("/product", options);
            const data = await response.json();
            if (data.status !== 201) {
                setStatus("idle");
                setErrorMessage(data.message);
            } else {
                console.log("Successfully added to Products Page");
                setStatus("idle");
                setUpdateProducts(updateProducts + 1);
                setInputProduct("");
                setInputBrand("");
                setInputStoreUrls("");
                setInputSrc("");
            }
        } catch (error) {
            setStatus("idle");
            setErrorMessage(error.message);
        }
    }

    return (
        <StyledPage>
            <h2>Admin Page</h2>
            <h3>Welcome Home Sylvia!!</h3>
            <section>
                <p>Would you like to add a new product to your Recommendation Page?</p>
                <form onSubmit={handleSubmit}>
                    <p>Please make sure all entries are filled out!</p>
                    <label>Brand Name: 
                        <input value={inputBrand} onChange={(ev)=>{setInputBrand(ev.target.value)}}></input>
                    </label>
                    <label>Product Name:
                        <input value={inputProduct} onChange={(ev)=>{setInputProduct(ev.target.value)}}></input>
                    </label>
                    <label>Store Links, Please separate with space:
                        <input value={inputStoreUrls} onChange={(ev)=>{setInputStoreUrls(ev.target.value)}}></input>
                    </label>
                    <label>Image:
                        <input value={inputSrc} onChange={(ev)=>{setInputSrc(ev.target.value)}}></input>
                    </label>
                    <button disabled={!inputProduct || !inputBrand || !inputStoreUrls || !inputSrc || status === "processing"}>Submit</button>
                </form>
                <p>{errorMessage}</p>
            </section>
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