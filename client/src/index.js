import ReactDOM from "react-dom/client";
import App from "./App";
import AdminProvider from "./contexts/AdminContext";
import ProductsProvider from "./contexts/ProductsContext";
import YouTubeVideosProvider from "./contexts/YouTubeVideosContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <AdminProvider>
            <YouTubeVideosProvider>
                <ProductsProvider>
                    <App />
                </ProductsProvider>
            </YouTubeVideosProvider>
        </AdminProvider>
    </>
);