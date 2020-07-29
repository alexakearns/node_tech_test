const axios = require("axios");
const data = require("./itinerary.json");
require("dotenv").config();

let reference_code = data.client_reference;
let url = `https://live.vamoos.com/v3/itinerary/${process.env.OPERATOR_CODE}/${reference_code}`;

const config = {
  headers: {
    "X-User-Access-Token": process.env.API_KEY,
    "X-Operator-Code": process.env.OPERATOR_CODE,
  }
}

axios.post(url, data, config)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
  