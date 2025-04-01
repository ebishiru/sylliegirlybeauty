const express = require("express");

const PORT = 4000;
const app = express();

app.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "Incorrect endpoint.",
    });
})

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
