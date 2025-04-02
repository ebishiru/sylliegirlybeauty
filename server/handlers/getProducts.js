const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const DB = "syllie_girly_beauty";
const PRODUCTS_COLLECTION = "products";

if (!MONGO_URI) throw new Error("Your MONGO_URI is missing!");

// Get all recommended products from MongoDB
const getProducts = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB);
        const products = await db.collection(PRODUCTS_COLLECTION).find().toArray();
        res.status(200).json({ 
            status: 200, 
            data: products
        });
    } catch (error) {
        res.status(502).json({ 
            status: 502, 
            message: error.message })
    } finally {
        await client.close();
    }
};

module.exports = getProducts;