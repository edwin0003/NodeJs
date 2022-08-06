const { matchedData } = require("express-validator")
const {tracksModel} = require("../models")
const { handleHttpError } = require("../utils/handleError")


/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res)=> {
    try {
        const data = await tracksModel.find({})
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_GET ITEMS')
    }
    
}
/**
 * Obtener detalle de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res)=> {
    try {
        req = matchedData(req);
        const {id}= req;
        const data= await tracksModel.findById(id);
        console.log(data)
        res.send({data})
    } catch (error) {
      handleHttpError(res, "Error_get item")  
    }
}
/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res)=> {
    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body)
        res.send({data})
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE ITEM')
    }
}
/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data =await tracksModel.findOneAndUpdate(
            id, body
        );
        
        res.send({data})

    } catch (error) {
        handleHttpError(res, "ERRROR_UPDate Items")
    }
}
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res)=> {
    try {
        req = matchedData(req)
        const {id}= req;
        const data = await tracksModel.delete({_id: id});
        res.send({data})
    } catch (error) {
        console.log(error)
        handleHttpError(res, "ERROR_DELETE ITEM")
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem}