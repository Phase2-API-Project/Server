const router = require('express').Router()
const userRoute = require('./user')
const betterDoctorRoute = require('./betterDoctor')
const openCageDataRoute = require('./openCageData')
const quoteGardenRoute = require('./quoteGarden')

router.use('/users', userRoute)
router.use('/doctor', betterDoctorRoute)
router.use('/loc', openCageDataRoute)
router.use('/quote', quoteGardenRoute)

module.exports = router