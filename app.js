const express = require('express')
const app = express()
const routes = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const urlMongoose = 'mongodb://localhost/GroupProjectWeek1'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(urlMongoose, { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if(err) console.log('Error connecting to db')
    else console.log('Success connecting to db')
})

app.use(cors())
app.use('/', routes)

app.listen(PORT, () => console.log('Running on port: ' + PORT))