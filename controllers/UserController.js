const User = require('../models/user')
const { OAuth2Client } = require('google-auth-library')
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

    static googlelogin(req, res, next) {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
        let payload = null
        client.verifyIdToken({
            idToken: req.body.token,
            audience: process.env.GOOGLE_CLIENT_ID
        })
            .then(ticket => {
                payload = ticket.getPayload()
                const token = generateToken({
                    email: payload.email
                })
                res.status(200).json({
                    token
                })
            })
            .catch(next)
    }
}

module.exports = UserController