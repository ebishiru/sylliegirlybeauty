import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { AdminContext } from "../../contexts/AdminContext";

const Header = () => {
    const { adminAccess } = useContext(AdminContext)

    return (
        <>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            {
                adminAccess? (
                    <NavLink to={"/admin"}>Admin</NavLink>
                ) : (
                    <NavLink to={"/login"}>Login</NavLink>
                )
            }
        </>
    )
}

export default Header;