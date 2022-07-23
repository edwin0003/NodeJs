const express = require("express")
const router = express.Router()
const fs = require("fs")
const PATH_ROUTES = __dirname;

const removeExtension= (fileName) =>{
    //TODO traks.js [tracks, js]
    return fileName.split('.').shift()
}
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name=  removeExtension(file) //TODO, index, tracks
    if (name!= 'index') {
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //TODO http://localhost:3000/api/tracks
    } 
})

module.exports = router