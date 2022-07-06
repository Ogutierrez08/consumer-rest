const token = require("./service/login")
const files = require('./service/getData')
const f = require('./utils/filer')
const z = require('./utils/zipper')



function processData(URL, user, pass, data, currentIndex) {
  if (currentIndex < data.length) {
    token.getToken(URL, user, pass)
      .then(x => files.getData(data[currentIndex].ep, x)
        .then(r => {
          f.createCSV(data[currentIndex].name, r)
          processData(URL, user, pass, data, currentIndex + 1)
        }))
  } else {
    console.log('Proceso de generación de csv culminado')
    z.zipper()
  }
}

module.exports = {processData}