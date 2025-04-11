import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { YouTubeVideosContext } from "../../contexts/YouTubeVideosContext";
import { AdminContext } from "../../contexts/AdminContext";
import styled from "styled-components";

const AddProduct = () => {
    const navigate = useNavigate();
    const { updateProducts, setUpdateProducts } = useContext(ProductsContext);
    const { youTubeVideos } = useContext(YouTubeVideosContext);
    const { adminAccess } = useContext(AdminContext);

    const [ inputProduct, setInputProduct ] = useState("");
    const [ inputBrand, setInputBrand ] = useState("");
    const [ inputStoreUrls, setInputStoreUrls ] = useState("");
    const [ inputSrc, setInputSrc ] = useState("");
    const [ inputLinkedVideos, setInputLinkedVideos ] = useState([]);
    const [ status, setStatus ] = useState("idle");
    const [ responseMessage, setResponseMessage ] = useState("");
    
    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setStatus("processing");
        setResponseMessage("");
        // Splitting up all store links into an array
        const inputStoreUrlsArray = inputStoreUrls.split(/\s+/);
        const productData = {
            name: inputProduct,
            brand: inputBrand,
            storeUrls: inputStoreUrlsArray,
            src: inputSrc,
            linkedVideos: inputLinkedVideos || [],
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
            const response = await fetch("https://sylliegirlybeauty.onrender.com/product", options);
            const data = await response.json();
            if (data.status !== 201) {
                setStatus("idle");
                setResponseMessage(data.message);
            } else {
                setStatus("idle");
                setResponseMessage("Successfully added to Products Page")
                setUpdateProducts(updateProducts + 1);
                setInputProduct("");
                setInputBrand("");
                setInputStoreUrls("");
                setInputSrc("");
                setInputLinkedVideos([]);
            }
        } catch (error) {
            setStatus("idle");
            setResponseMessage(error.message);
        }
    }

    //Verify that user is logged in
    if (!adminAccess) {
        return navigate("/");
    }
    
    return (
        <StyledPage>
            <h2>Add A Recommended Product:</h2>
            <h3>Please make sure to fill out * entries!!</h3>
            <section>
                <StyledForm onSubmit={handleSubmit}>
                    <label>*Brand Name: 
                        <input value={inputBrand} onChange={(ev)=>{
                            setInputBrand(ev.target.value)
                            setResponseMessage("")
                        }}></input>
                    </label>
                    <label>*Product Name:
                        <input value={inputProduct} onChange={(ev)=>{
                            setInputProduct(ev.target.value)
                            setResponseMessage("")
                        }}></input>
                    </label>
                    <label>*Store Links: (Please separate by line or space)
                        <textarea value={inputStoreUrls} onChange={(ev)=>{
                            setInputStoreUrls(ev.target.value)
                            setResponseMessage("")
                        }}></textarea>
                    </label>
                    <label>*Image:
                        <input value={inputSrc} onChange={(ev)=>{
                            setInputSrc(ev.target.value)
                            setResponseMessage("")
                        }}></input>
                    </label>
                    <label>Linked YouTube videos: (Hold Ctrl to unselect/select multiple)
                        <select multiple value={inputLinkedVideos} onChange={(ev)=>{
                            const selectedOptions = ev.target.selectedOptions;
                            const selectedVideos = [];
                            for (let i=0;i<selectedOptions.length; i++) {
                                selectedVideos.push(selectedOptions[i].value);
                            }
                            setInputLinkedVideos(selectedVideos);
                            setResponseMessage("");
                        }}>
                            {
                                youTubeVideos.map((youTubeVideo, index)=>{
                                    return (
                                        <option value={youTubeVideo.snippet.resourceId.videoId} key={index} >{youTubeVideo.snippet.title}</option>
                                    )
                                })
                            }
                        </select>
                    </label>
                    <ButtonContainer>
                    <button disabled={!inputProduct || !inputBrand || !inputStoreUrls || !inputSrc || status === "processing"}>Submit</button>
                    </ButtonContainer>
                </StyledForm>
                <p>{responseMessage}</p>
            </section>
        </StyledPage>
        


    )
}

export default AddProduct;

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
    & p {
        margin: 0 1rem;
    }
`
const StyledForm = styled.form`
    max-width: 600px;
    & label {
        margin-left: 1rem;
    }
    & input {
        display: block;
        margin: 0.5rem 0;
        margin-left: 1rem;
        padding: 0.25rem 0.5rem;
        border: 2px solid var(--color-darkpink);
        outline-color: var(--color-darkgreen);
        width: 500px;
    }
    & p {
        margin-bottom: 0.5rem;
    }
    & textarea {
        margin: 0.5rem 0;
        margin-left: 1rem;
        padding: 0.25rem 0.5rem;
        border: 2px solid var(--color-darkpink);
        width: 500px;
        height: 5rem;
    }
    & select {
        margin: 0.5rem 0;
        margin-left: 1rem;
        border: 2px solid var(--color-darkpink);
        width: 520px;
        height: 8rem;
    }
    & button {
        margin: 1rem auto;
        padding: 0.5rem 1rem;
        border: 0.1rem solid var(--color-darkgreen);
        border-radius: 10px;
        color: var(--color-white);
        background-color: var(--color-darkgreen);
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        &:active {
            transform: scale(0.9);
        }
        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`
const ButtonContainer = styled.div`
    width: 520px;
    display: flex;
    justify-content: center;
`