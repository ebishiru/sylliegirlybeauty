import { useState, useContext, use } from "react";

const Admin = () => {
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
            }
        } catch (error) {
            setStatus("idle");
            setErrorMessage(error.message);
        }
    }

    return (
        <>
            <h2>Admin Control Page</h2>
            <p>Welcome Home Sylvia!!</p>
            <section>
                <p>Would you like to add a new product to your Recommendation Page?</p>
                <form onSubmit={handleSubmit}>
                    <p>Please make sure all entries are filled out!</p>
                    <label>Product Name:
                        <input value={inputProduct} onChange={(ev)=>{setInputProduct(ev.target.value)}}></input>
                    </label>
                    <label>Brand Name:
                        <input value={inputBrand} onChange={(ev)=>{setInputBrand(ev.target.value)}}></input>
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
        </>
        


    )
}

export default Admin;