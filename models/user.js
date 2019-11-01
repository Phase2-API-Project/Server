const { Schema, model } = require('mongoose')
const hashPassword = require('../helpers/passwordHasher').hashPassword
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    }
)

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    next()
})

userSchema.post('save', function(error, doc, next) {
    if(error.name === 'MongoError' && error.code === 11000) {
        next({status: 401, message: 'email is already registered'})
    } else {
        next(error)
    }
})

const User = model('User', userSchema)
module.exports = User