var db = require('../connection/db-connection')

exports.update_connection = (client_id,connection) => { 

    console.log(`UPDATE device SET connection = '${connection}' WHERE client_id = '${client_id}' `)
    db.query(`UPDATE device SET connection = '${connection}' WHERE client_id = '${client_id}' `, (err, Result) => {
        if (err) throw err
    })
}
