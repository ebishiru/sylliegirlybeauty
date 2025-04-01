import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const [ products, setProducts ] = useState([]);
    const [ updateProducts, setUpdateProducts ] = useState(0);

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const response = await fetch("/products");
                const { data } = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };
        fetchProducts();
    },[updateProducts]);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;