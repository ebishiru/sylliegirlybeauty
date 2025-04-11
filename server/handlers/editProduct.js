const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const DB = "syllie_girly_beauty";
const PRODUCTS_COLLECTION = "products";

if (!MONGO_URI) throw new Error("Your MONGO_URI is missing!");

//Edit the content of a single product 
const editProduct = async (req, res) => {
    const client = new MongoClient(MONGO_URI);
    const { _id, name, brand, storeUrls, src, toggleShow, linkedVideos } = req.body;
    //Confirm that all necessary information is provided
    if (!_id || !name || !brand || !storeUrls || !src ) {
        return res.status(400).json({
            status: 400,
            message: "Please provide all necessary information."
        })
    }
    const query = { _id };
    const edittedValues = {
        $set: {
            name,
            brand,
            storeUrls,
            toggleShow,
            linkedVideos: linkedVideos || [],
        }
    }
    
    try {
        await client.connect();
        const db = client.db(DB);
        const product = await db.collection(PRODUCTS_COLLECTION).findOne({ _id });
        //Confirm product exists in database
        if (!product) {
            return res.status(404).json({
                status: 404,
                message: `Could not find product with _id of ${_id}.`
            })
        }
        const result = await db.collection(PRODUCTS_COLLECTION).updateOne(query, edittedValues);
        if (result.modifiedCount === 0) {
            return res.status(400).json({
                status: 400,
                message: "Product could not be updated."
            })
        }
        res.status(202).json({
            status: 202,
            message: "Product successfully updated."
        })
    } catch (error) {
        res.status(502).json({
            status: 502,
            message: error.message
        })
    } finally {
        await client.close();
    }

}

module.exports = editProduct;