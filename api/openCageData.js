const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1' 
})

module.exports = instance