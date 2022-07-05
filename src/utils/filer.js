const fs = require('fs');


function createCSV(name, data) {
  fs.writeFileSync(`src/data/${name}.csv`, data)
}

module.exports = { createCSV }