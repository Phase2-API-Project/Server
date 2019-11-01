const router = require('express').Router()
const OpenCageDataController = require('../controllers/OpenCageDataController')
const authentication = require('../middlewares/auth')

router.post('/get', authentication, OpenCageDataController.showAll)

module.exports = router