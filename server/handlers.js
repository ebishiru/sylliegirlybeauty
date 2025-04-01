const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const DB = "syllie_girly_beauty";
const USERS_COLLECTION = "users";
const PRODUCTS_COLLECTION = "products";

if (!MONGO_URI) throw new Error("Your MONGO_URI is missing!");

//Admin Login
const logIn = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    const { email, password } = req.body;
    //Verify that email and password are provided from the body
    if (!email || !password) {
        return res.status(400).json({
            status: 400,
            message: "Please provide both an email and password"
        });
    }
    try {
        await client.connect();
        const db = client.db(DB);
        const user = await db.collection(USERS_COLLECTION).findOne({email});
        //Verify that user with that email exists
        if (!user) {
            return res.status(400).json({
                status: 400,
                message: "We could not find an account with that information."
            });
        }
        //Verify if provided password matches that user's password
        if (user.password !== password) {
            return res.status(400).json({
                status: 400,
                message: "Wrong password, please try again."
            })
        }
        res.status(200).json({
            status: 200,
            message: "Login successful.",
            data: user
        });
    } catch (error) {
        res.status(502).json({
            status: 502,
            message: error.message
        });
    } finally {
        await client.close();
    }
}

// Get all recommended products from MongoDB
const getProducts = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    try {
        await client.connect();
        const db = client.db(DB);
        const products = await db.collection(PRODUCTS_COLLECTION).find().toArray();
        res.status(200).json({ status: 200, data: products});
    } catch (err) {
        res.status(500).json({ status: 500, message: err.message })
    } finally {
        client.close();
    }
};

module.exports = {
    logIn,
    getProducts
}
