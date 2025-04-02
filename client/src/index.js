import ReactDOM from "react-dom/client";
import App from "./App";
import AdminProvider from "./contexts/AdminContext";
import ProductsProvider from "./contexts/ProductsContext";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <AdminProvider>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </AdminProvider>
    </>
);