const axios = require('axios');
require('dotenv').config()

let url = "https://live.vamoos.com/v3/itinerary"
let config = {
  headers: {
    "X-User-Access-Token": process.env.API_KEY,
    "X-Operator-Code": process.env.OPERATOR_CODE
  }
}

axios.get(url, config)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })

console.log(process.env)