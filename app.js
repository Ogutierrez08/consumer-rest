const conf = require("./config.json")
const x = require('./src/iteration')

const username = conf.CREDENTIALS.user
const password = conf.CREDENTIALS.password
const URL = conf.SERVICES.LOGIN

const TABLES = conf.SERVICES.TABLES

x.processData(URL, username, password, TABLES, 0)



