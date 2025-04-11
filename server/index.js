const express = require("express");

const PORT = 4000;

const {
    getYoutTubeVideos,
    getProducts,
    addProduct,
    editProduct,
    removeProduct,
    logIn,
} = require("./handlers");

const app = express();

app.use(express.json());

app.get("/youtubevideos", getYoutTubeVideos)
app.get("/products", getProducts)

app.post("/product", addProduct)
app.patch("/product", editProduct)
app.delete("/product", removeProduct)

app.post("/login", logIn);

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
