const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.post('/', UserController.create)
router.get('/', UserController.login)

module.exports = router