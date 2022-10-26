const map = require('../config/sqlMap')
const connect = require('./database')

function getTableDatas(table, query, callback) {
  let sql = `select * from ${table}`
  let keys = Object.keys(query)
  let values = Object.values(query)
  let pagesql = ''

  if (keys.length !== 0) {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] == '_page') {
        pagesql = map['_page'](values[i])
      } else if (i == 0) {
        sql += map['0'](keys[0], values[0])
      } else {
        sql += map['1'](keys[i], values[i])
      }
    }
    sql += pagesql
  }
  console.log(sql);
  connect(sql, callback)
}

function getTableCount(table, callback) {
  const sql = `select count(*) as count from ${table}`
  console.log(sql);
  connect(sql, callback)
}

function insertTableData(table, query, callback) {
  var sql = `INSERT into ${table} set`
  var keys = Object.keys(query)
  var values = Object.values(query)
  for (let i = 0; i < keys.length; i++) {
    if(keys[i].indexOf('Date') !== -1) values[i] = new Date(values[i])
    sql += i == keys.length - 1 ? map['insert'](keys[i]) : map['insert'](keys[i]) + ','
  }
  connect(sql, values, callback)
}

function resetTableId(table, callback) {
  const sql = `ALTER TABLE ${table} MODIFY COLUMN id int NOT NULL FIRST ,DROP PRIMARY KEY;ALTER TABLE ${table} ADD COLUMN id_renew int NULL AUTO_INCREMENT FIRST ,ADD PRIMARY KEY (id_renew);ALTER TABLE ${table} DROP COLUMN id;ALTER TABLE ${table} CHANGE COLUMN id_renew id int(7) NOT NULL AUTO_INCREMENT FIRST;`
  connect(sql, callback)
}

function deleteTableData(table, query, callback) {
  let sql = `delete from ${table} `
  let keys = Object.keys(query)
  let values = Object.values(query)
  sql += `where ${keys[0]} = '${values[0]}'`
  connect(sql, callback)
}

module.exports = {getTableDatas, getTableCount, insertTableData, resetTableId, deleteTableData}