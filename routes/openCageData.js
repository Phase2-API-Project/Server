const router = require('express').Router()
const OpenCageDataController = require('../controllers/OpenCageDataController')

router.get('/get', OpenCageDataController.showAll)

module.exports = router