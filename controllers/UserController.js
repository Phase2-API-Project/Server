const User = require('../models/user')
const comparePassword = require('../helpers/passwordHasher').comparePassword
const generateToken = require('../helpers/tokenMaker').generateToken

class UserController {
    static create(req, res, next) {
        let objUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.create(objUser)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }

    static login(req, res, next) {
        User.findOne(
            {
                email: req.body.email
            }
        )
            .then(user => {
                if(comparePassword(req.body.password, user.password)) {
                    let token = generateToken({
                        user: {
                            id: user.id,
                            email: user.email
                        }
                    })
                    res.status(200).json({ token })
                } else {
                    throw new Error('wrong password')
                }
            })
            .catch(next)
    }
}

module.exports = UserController