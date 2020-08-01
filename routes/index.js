const express  = require('express')
const router = express.Router()

/**
 * Importar el controlador
 */
const proyectosControler = require('../controllers/proyectosController')

/**
 Ruta para el home
  */
  

module.exports = () => {
    
    router.get( '/', proyectosControler.ProyectosHome )
    router.get('/nuevo-proyecto', proyectosControler.formularioProyecto)
    router.post('/nuevo-proyecto', proyectosControler.nuevoProyecto)
    
    
    
    return router

}

