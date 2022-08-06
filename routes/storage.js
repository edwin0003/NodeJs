
const express = require ("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const {getItems, createItem}= require("../controllers/storage")
 //TOD  http://localhost:3000/api/storage


 router.get("/", getItems)
 router.post("/", uploadMiddleware.single("myfile"), createItem)
 
 module.exports = router;