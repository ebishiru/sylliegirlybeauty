import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsProvider from "./contexts/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <ProductsProvider>
            <App />
        </ProductsProvider>
    </>
);