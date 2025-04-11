const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const DB = "syllie_girly_beauty";
const PRODUCTS_COLLECTION = "products";

if (!MONGO_URI) throw new Error("Your MONGO_URI is missing!");

// Deletes a single product recommendation from products
const removeProduct = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    const { _id } = req.body;
    const query = { _id };
    try {
        await client.connect();
        const db = client.db(DB);
        const deletion = await db.collection(PRODUCTS_COLLECTION).deleteOne( query );
            if (deletion.deletedCount === 0) {
                res.status(400).json({
                    status: 400, 
                    message: "Product was not deleted."})
            }
            res.status(200).json({
                status: 200, 
                message: "Product successfully removed."})
    } catch (error) {
        res.status(502).json({
            status: 502,
            message: error.message,
        })
    } finally {
        await client.close();
    }
}

module.exports = removeProduct;