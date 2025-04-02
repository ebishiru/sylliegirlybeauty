const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const { v4: uuidv4 } = require("uuid");

const DB = "syllie_girly_beauty";
const PRODUCTS_COLLECTION = "products";

if (!MONGO_URI) throw new Error("Your MONGO_URI is missing!");

// Add a single product recommendation to products
const addProduct = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    const { name, brand, storeUrls, src } = req.body;
    //Verify that all info are provided from the body
    if (!name || !brand || !storeUrls || !src) {
        return res.status(400).json({
            status: 400, 
            message: "Please provide all necessary information"
        })
    }
    const newProduct = {
        _id: uuidv4(),
        name,
        brand,
        storeUrls,
        src
    };
    try {
        await client.connect();
        const db = client.db(DB);
        const result = await db.collection(PRODUCTS_COLLECTION).insertOne(newProduct);
        if (!result.acknowledged) {
            return res.status(500).json({
                status: 500,
                message: "Product Recommendation was not added."
            })
        } else {
            res.status(201).json({
                status: 201,
                message: "Product Recommendation successfully created."
            })
        }
    } catch (error) {
        res.status(502).json({ 
            status: 502, 
            message: error.message })
    } finally {
        await client.close();
    }
}

module.exports = addProduct;