const cse = require('../utils/consumer')

module.exports = {
  async getData(URL, bearer) {
    const r = await cse.consumeFiles(URL, bearer)
    return r
  },
}