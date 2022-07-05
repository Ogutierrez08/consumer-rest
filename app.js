const conf = require("./config.json")

const username = conf.CREDENTIALS.user
const password = conf.CREDENTIALS.password
const URL = conf.SERVICES.LOGIN

const TABLES = conf.SERVICES.TABLES

TABLES.forEach(element => {
  console.log(element)
});





