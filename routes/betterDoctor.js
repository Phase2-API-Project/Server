const router = require('express').Router()
const BetterDoctorController = require('../controllers/BetterDoctorController')

router.get('/get', BetterDoctorController.showAll)

module.exports = router