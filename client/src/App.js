import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home/index.js"
import Videos from "./pages/Videos/index.js"
import Video from "./pages/Video/index.js"
import Products from "./pages/Products/index.js"
import Login from "./pages/Login/index.js"
import Admin from "./pages/Admin/index.js"
import Header from "./pages/Header/index.js"


const App = () => {
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
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App