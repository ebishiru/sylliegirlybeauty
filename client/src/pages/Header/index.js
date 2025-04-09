import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react"
import { AdminContext } from "../../contexts/AdminContext";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const { adminAccess, setAdminAccess } = useContext(AdminContext)

    const handleLogOut = () => {
        setAdminAccess(false);
        navigate("/");
    }

    return (
        <>
            <Banner src="https://yt3.googleusercontent.com/dcPSspEeFlvOosVIOORK4ZF6kPgcpJOhJJcX70Sb2cX3OV_B48fg7wtJKrTv-xkv_tuQ4G3RSA=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"/>
            <NavLinkContainer>
                <StyledNavLink to={"/"}>Home</StyledNavLink>
                <StyledNavLink to={"/videos"}>Videos</StyledNavLink>
                <StyledNavLink to={"/products"}>Products</StyledNavLink>
                {
                    adminAccess && <StyledNavLink to={"/admin"}>Admin</StyledNavLink>
                }
                {
                    adminAccess && <StyledButton onClick={handleLogOut}><FaSignOutAlt size={20}/></StyledButton>
                }
            </NavLinkContainer>
            
        </>
    )
}

export default Header;

const Banner = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 4px solid var(--color-darkpink);
`

const NavLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const StyledNavLink = styled(NavLink)`
    margin: 1rem 0.5rem;
    padding: 0.5rem 1rem;
    border: 0.1rem solid var(--color-darkgreen);
    border-radius: 10px;
    color: var(--color-white);
    background-color: var(--color-darkgreen);
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    &.active {
        color: var(--color-darkgreen);
        background-color: var(--color-white);
    }
    
`

const StyledButton = styled.button`
    margin: 1rem 0.5rem;
    padding: 0.25rem 1rem;
    border: 0.1rem solid var(--color-darkgreen);
    border-radius: 10px;
    color: var(--color-white);
    background-color: var(--color-darkgreen);
    font-weight: bold;
    cursor: pointer;
`