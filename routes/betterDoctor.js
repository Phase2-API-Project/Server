const router = require('express').Router()
const BetterDoctorController = require('../controllers/BetterDoctorController')
const authentication = require('../middlewares/auth')

router.post('/get', authentication, BetterDoctorController.showAll)

module.exports = router