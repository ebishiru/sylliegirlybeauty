const express = require("express");

const PORT = 4000;

const {
    logIn,
    getProducts,
    addProduct,
    getYoutTubeVideos
} = require("./handlers");

const app = express();

app.use(express.json());

app.post("/login", logIn);
app.get("/products", getProducts)
app.post("/product", addProduct)
app.get("/youtubevideos", getYoutTubeVideos)

app.post("/login", (req, res) => {
    res.status(200).json({ message: "Test route working!" });
});


app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
