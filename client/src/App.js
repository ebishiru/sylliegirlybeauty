import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/index.js"
import Videos from "./pages/Videos/index.js"
import Video from "./pages/Video/index.js"
import Products from "./pages/Products/index.js"
import Login from "./pages/Login/index.js"
import Admin from "./pages/Admin/index.js"
import AddProduct from "./pages/AddProduct/index.js"
import EditProduct from "./pages/EditProduct/index.js"
import Header from "./pages/Header/index.js"
import { AdminContext } from "./contexts/AdminContext.js"
import { useContext, useEffect } from "react"

const App = () => {
    const { setAdminAccess } = useContext(AdminContext);

    useEffect(()=>{
        const savedAdminAccess = JSON.parse(localStorage.getItem("adminAccess"));
        if (savedAdminAccess) {
            setAdminAccess(savedAdminAccess);
        }
    },[])

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/video/:videoId" element={<Video />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/addProduct" element={<AddProduct />} />
                <Route path="/admin/:productId" element={<EditProduct />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App