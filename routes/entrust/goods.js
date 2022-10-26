var express = require('express');
var router = express.Router();
const table = 'goods';
const {getTableDatas, getTableCount, insertTableData}  = require('../../models/tableSQL')
const GoodsData = require('../../models/entrust/goods')

const Goods = new GoodsData()
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
  getTableCount(table,(err, result) => {
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

module.exports = router;
