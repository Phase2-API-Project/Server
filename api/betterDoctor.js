const axios = require('axios')

const instance = axios.create({
  baseURL: 'https://api.betterdoctor.com/2016-03-01' 
})

module.exports = instance