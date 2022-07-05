const cs = require('../utils/consumer')

async function getToken(URL,username, password) {
  const r = await cs.consumeLogin(URL,username,password)
  return r
}


module.exports = {getToken}