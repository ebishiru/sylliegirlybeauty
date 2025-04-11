import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AdminContext } from "../../contexts/AdminContext";
import styled from "styled-components";

const Login = () => {
    const navigate = useNavigate();
    const { adminAccess, setAdminAccess } = useContext(AdminContext)

    const [ inputEmail, setInputEmail ] = useState("");
    const [ inputPassword, setInputPassword ] = useState("");
    const [ status, setStatus ] = useState("idle");
    const [ errorMessage, setErrorMessage ] = useState("");

    const handleLogIn = async (ev) => {
        ev.preventDefault();
        setStatus("logging");
        setErrorMessage("");
        const logInData = {
            email: inputEmail,
            password: inputPassword
        }
        const body = JSON.stringify( logInData );
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body
        }
        try {
            const response = await fetch("https://sylliegirlybeauty.onrender.com/logIn", options);
            const data = await response.json();
            if (data.status !==200) {
                setStatus("idle");
                setErrorMessage(data.message);
            } else {
                setInputEmail("");
                setInputPassword("");
                setAdminAccess(true);
                localStorage.setItem("adminAccess", JSON.stringify(true));
                navigate("/admin");
            }
        } catch (error) {
            setStatus("idle");
            setErrorMessage(error.message);
        }
    }

    if (adminAccess) {
        return navigate("/admin");
    }

    return (
        <StyledPage>
            <h2>Login Page</h2>
            <h3>sorry girlies, this is a restricted zone!!</h3>
            <StyledForm onSubmit={handleLogIn}>
                <label>Email:
                    <input type="email" value={inputEmail}onChange={(ev)=>{
                        setInputEmail(ev.target.value)
                        setErrorMessage("");
                        }}></input>
                </label>
                <label>Password:
                    <input type="password" value={inputPassword} onChange={(ev)=>{
                        setInputPassword(ev.target.value)
                        setErrorMessage("");
                        }}></input>
                </label>
                <button disabled={!inputEmail || !inputPassword || status === "logging"}>Log In</button>
            </StyledForm>
            <p>{errorMessage}</p>
        </StyledPage>
    )
}

export default Login;

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
const StyledForm = styled.form`
    max-width: 400px;
    text-align: center;
    & label {
        display: block;
        text-align: right;
    }
    & input {
        margin: 0.5rem 1rem;
        padding: 0.25rem 0.5rem;
        border: 2px solid var(--color-darkpink);
        outline-color: var(--color-darkgreen);
    }
    & button {
        margin: 1rem 0.5rem;
        padding: 0.5rem 1rem;
        border: 0.1rem solid var(--color-darkgreen);
        border-radius: 10px;
        color: var(--color-white);
        background-color: var(--color-darkgreen);
        font-weight: bold;
        text-transform: uppercase;

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
    }
`