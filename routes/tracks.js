const express = require ("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

const router = express.Router();
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")
//TODO http://localhost/tracks GET, POST DELETE, PUT
/**
 * Listar los items
 */
router.get("/", getItems)
/**
 * Obtener detalle de item
 */
router.get("/:id", validatorGetItem, getItem)
/**
 * Crear un registro
 */
router.post("/",validatorCreateItem, createItem)

/**
 * Crear un actulizar un regitro
 */
 router.put("/:id", validatorGetItem , validatorCreateItem, updateItem)

 /**
 * Eliminar un registro
 */
router.delete("/:id", validatorGetItem, deleteItem)

module.exports = router