const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/create', UserController.create)
router.post('/login', UserController.login)
router.post('/googlelogin', UserController.googlelogin)

module.exports = router