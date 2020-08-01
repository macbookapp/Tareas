const express = require('express')
const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser')

/**
Crear App Express
 */
 const app = express()

 /**
  * Archivos Estaticos
  */
 app.use(express.static('public'))
 
 /**
 Habilitar Pug
  */
 app.set( 'view engine', 'pug' )
 
 /**
 Carpeta de vistas
  */
 app.set('views', path.join( __dirname, './views' ))

 /**
  * Habilitar body-parser para ver los datos de los formularios
  */
 app.use(bodyParser.urlencoded( { extended: true } ))
 
 
 app.use('/', routes())
 
 /**
 Servidor
  */
  app.listen(3000, () => {
      console.log( `Servidor corriendo en localhost:3000` );
  });