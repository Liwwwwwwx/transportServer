let map = {
  '_page': (value) => ` limit ${10*(value-1)}, ${10*value}` ,
  '0':(key, value) => ` where ${key} = ${value}`,
  '1':(i, key, value) => ` and ${key[i]} = ${value[i]}`,
  'insert':(key) =>  ` ${key} = ?`
}

module.exports = map