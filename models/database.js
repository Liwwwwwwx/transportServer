var mysql = require('mysql')
var config = require('../config/config.json')

var pool = mysql.createPool(config)

function connect(sql, options, callback) {
  pool.query(sql, options, (err, results) => {
    if (err) {
      callback(true)
      return
    }
    callback(false, results)
  })
}

module.exports = connect 