/**
 * Controlador del Home
 */

exports.ProyectosHome = (req, res) => {
    res.render( 'index', { nombrePagina: 'Proyectos' })
}

exports.formularioProyecto = ( req, res ) => {
    res.render('nuevo-proyecto', { nombrePagina: 'Nuevo Proyecto' })
}

exports.nuevoProyecto = ( req, res ) => {
    // Validar que el campo no este vacio
    const errores = []
    const { nombre } = req.body

    if (!nombre){

        errores.push( { msg: 'Agrega un nombre al proyecto' } )
    }

    if( errores.length > 0 ){
        for( error of errores ){
            console.log(error.msg)
        }
        res.render( 'nuevo-proyecto',  { nombrePagina: 'Nuevo Proyecto' , errores} )
    }else{

        
        res.redirect('/');
    }

}


