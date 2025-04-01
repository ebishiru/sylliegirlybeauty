import { useState } from "react"

const Login = () => {

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
            const response = await fetch("/logIn", options);
            const data = await response.json();
            if (data.status !==200) {
                setStatus("idle");
                setErrorMessage(data.message);
            } else {
                console.log("You are logged in!");
            }
        } catch (error) {
            setStatus("idle");
            setErrorMessage(error.message);
        }


    }

    return (
        <>
            <h2>Login Page</h2>
            <p>Please enter all the necessary information:</p>
            <form onSubmit={handleLogIn}>
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
            </form>
            <p>{errorMessage}</p>
        </>
    )
}

export default Login;