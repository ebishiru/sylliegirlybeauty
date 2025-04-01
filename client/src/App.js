import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App