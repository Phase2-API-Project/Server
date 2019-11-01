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

const User = model('User', userSchema)
module.exports = User