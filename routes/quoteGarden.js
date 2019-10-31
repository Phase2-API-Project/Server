const router = require('express').Router()
const QuoteGardenController = require('../controllers/QuoteGardenController')

router.get('/get', QuoteGardenController.get)

module.exports = router