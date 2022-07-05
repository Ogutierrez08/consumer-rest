const axios = require("axios")

function consumeLogin(URL, username, pass) {
  return new Promise(resolve => {
    let data = JSON.stringify({
    "username": username,
    "password": pass
  })

  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  axios.post(URL, data, config)
    .then(response => resolve(response.data))
    .catch((error) => console.log(error))
  })
  
}

function consumeFiles(URL, bearer) {
  return new Promise(resolve => {
    config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${bearer}`
      }
    }
    axios.get(URL, config)
      .then(response => resolve(response.data))
      .catch((error) => console.log(error))
  })

}


module.exports = { consumeLogin, consumeFiles }
