const connect = require('../database')

class Goods {
  // 新增订单
  insertGoods(data, callback) {
    var options = Object.values(data)
    const sql = 'INSERT into goods (goodsName, orderId, goodsNumber, goodsType, goodsWeight, goodsVolume) values(?, ?, ?, ?, ?, ?);'
    connect(sql, options, callback)
  }
}

module.exports = Goods