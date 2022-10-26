var express = require('express');
var router = express.Router();
const UserData = require('../models/user')

const userdata = new UserData()

function formatData(result) {
  return JSON.stringify({
    status:'200',
    data:result
  })
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/get', (req, res) => {
  res.header('Access-Control-Allow-Origin','*')
  const username = 'Liwwwwwwx'
  userdata.getOne(username, (err, result) => {
    if(err) {
      return ;
    }
    console.log(result)
    res.send(result)
  })
})

module.exports = router;
