const getYoutTubeVideos = require("./handlers/getYouTubeVideos");
const getProducts = require("./handlers/getProducts");
const addProduct = require("./handlers/addProduct");
const editProduct = require("./handlers/editProduct");
const removeProduct = require("./handlers/removeProduct");
const logIn = require("./handlers/logIn");

module.exports = {
    getYoutTubeVideos,
    getProducts,
    addProduct,
    editProduct,
    removeProduct,
    logIn,
}
