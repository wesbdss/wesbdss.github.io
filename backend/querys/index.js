const mysql = require('mysql');
const config = require('./../config/config')


const conn = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database
})

conn.connect((err) => {
    if (err) throw err;
    console.log('connectado ao banco!')
});


module.exports = (res,query) => {
    if (query) {
        conn.query(query, (err, result) => {
            if (err) throw err;
            console.log("Usuários Listados")
            res.status(200).json({ message:  result})
        });

    }


}