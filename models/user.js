const connect = require('./database.js')

class User {
  getOne(username, callback) {
    const sql = 'select UserPassword from User where UserName = ?'
    const options = username
    connect(sql, options, callback)
  }
  get(callback) {
    const sql = 'select * from User'
    connect(sql, callback)
  }
}

module.exports = User