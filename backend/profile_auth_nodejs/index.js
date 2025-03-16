const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const authRouter = require('./authRouter')

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://*:*@cluster0.4d1nupp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(PORT, () => console.log(`server starting on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()