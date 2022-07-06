
const AdmZip = require("adm-zip")
const fs = require('fs')
const conf = require('../../config.json')


function zipper() {
  var zip = new AdmZip();

  let x = fs.readdirSync(conf.ROUTER.DATAREPOSITORY)

  x.map(e => zip.addLocalFile(`${conf.ROUTER.LOCALPATH}${e}`))

  zip.writeZip(`${conf.ROUTER.OUTPATH}`);
}

module.exports = {zipper}
