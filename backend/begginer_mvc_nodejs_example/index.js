const express = require('express')

const app = express()

const userRoute = require('./routes/User')
app.use('/user', userRoute)

app.listen(3005, () => {
    console.log("server is running in 3005")
})