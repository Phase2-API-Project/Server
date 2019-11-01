const router = require('express').Router()
const QuoteGardenController = require('../controllers/QuoteGardenController')
const authentication = require('../middlewares/auth')

router.get('/get', authentication, QuoteGardenController.get)

module.exports = router