var express = require('express');
var router = express.Router();
const table = 'orders'
const {getTableDatas, getTableCount, insertTableData, resetTableId, deleteTableData}  = require('../../models/tableSQL')
const OrderData = require('../../models/entrust/order')


const order = new OrderData()
/* GET orders listing. */
router.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  const query = req.query
  getTableDatas(table, query, (err, result) => {
    if (err) {
      return;
    }
    res.send(result)
  })
});

// 获取订单数量
router.get('/count', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  getTableCount(table, (err, result) => {
    if (err) {
      return;
    }
    res.send(result)
  })
})

// 新增订单信息
router.post('/insert', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  let data = req.body
  insertTableData(table, data, (err, result) => {
    if (err) {
      return;
    }
    res.send(JSON.parse(JSON.stringify({
      stats:200,
      message:'添加成功'
    }))) 
  })
})

// 删除订单信息
router.post('/delete', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  var data = req.body
  deleteTableData(table, data, (err, result) => {
    if(err) {
      return;
    }
    res.send(JSON.parse(JSON.stringify({
      status:200,
      message:'删除成功'
    })))
  })

})

module.exports = router;
