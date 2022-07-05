const token = require("./service/login")
const files = require('./service/getData')
const f = require('./utils/filer')


function processData(URL, user, pass, data, currentIndex) {
  if (currentIndex < data.length) {
    token.getToken(URL, user, pass)
      .then(x => files.getData(URLCLIENT, x)
        .then(r => f.createCSV(`clientes`, r)))
  } else {

  }
}