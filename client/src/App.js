import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home/index.js"
import Products from "./components/Products/index.js"
import Login from "./components/Login/index.js"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App