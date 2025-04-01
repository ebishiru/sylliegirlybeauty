const express = require("express");

const PORT = 4000;

const {
    logIn,
    getProducts
} = require("./handlers");

const app = express();

app.use(express.json());

app.post("/login", logIn);
app.get("/products", getProducts)

app.post("/login", (req, res) => {
    res.status(200).json({ message: "Test route working!" });
});


app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
