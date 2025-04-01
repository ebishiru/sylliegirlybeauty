import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext";

const Products = () => {
    const {products} = useContext(ProductsContext);
    
    return (
        <>
            <h2>Syllie Recommended Products</h2>
            <p>Girly girls don't gatekeep!</p>

            <span>Product 1</span>
            <span>Product 2</span>
            <span>Product 3</span>
            <span>Product 4</span>
            <span>Product 5</span>
        </>
    )
}

export default Products;