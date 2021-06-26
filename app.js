//CONEXION  BASE DE DATOS MYSQL
var mysql = require('mysql')

var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: ''
})

conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log('CONEXION EXITOSA')
    }

})
//MOSTRAR
conexion.query('select * from users', function(error, results, fields){
    if(error)
    throw error

        results.forEach(result => {
            console.log(result)
            
        })
    
})
// NOTA: error y results pueden ser cualquier variable
//INSERTAR
// conexion.query('INSERT INTO users (nombre,edad) VALUES ( "NANCY", "21")', function(error, results){
//     if(error)throw error

//     console.log('REGISTRO AGREGADO', results)
    
// })

//ACTUALIZAR
// conexion.query('UPDATE users SET nombre = "jennie",edad="26" WHERE id=3 ', function(error, results){
//     if(error)throw error

//     console.log('REGISTRO ACTUALIADO', results)
    
// })
//ELIMINAR
conexion.query('DELETE FROM users WHERE id=4', function(error, results){
    if(error)throw error

    console.log('REGISTRO ACTUALIADO', results)
    
})

//TERMINAMOS LA CONEXION
conexion.end()


