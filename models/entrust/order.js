const connect = require('../database.js')
class Order {
  // 新增订单
  insertOrder(data, callback) {
    data.takeDate = new Date(data.takeDate)
    data.operaDate = new Date(data.operaDate)
    var options = Object.values(data)
    const sql = 'INSERT into orders (orderId, customer, type, state, totalNumber, totalWeight, consighnor, consighnorPhone, startAddress, consignee, consigneePhone, endAddress, operationPeople, takeDate, operaDate) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);'
    connect(sql, options, callback)
  }
}

module.exports = Order