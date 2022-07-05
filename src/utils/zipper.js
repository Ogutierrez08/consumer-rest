
const AdmZip = require("adm-zip")
const fs = require('fs')


function zipper() {
  var zip = new AdmZip();

  let x = fs.readdirSync("D:/rest-consumer/src/data/")

  x.map(e => zip.addLocalFile(`D:/rest-consumer/src/data/${e}`))

  zip.writeZip("D:/rest-consumer/src/output/output.zip");
}

module.exports = zipper
