const express = require('express')
const app = express()
const port = 3002
const router = require('./routes/api')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()
app.use(bodyParser.json())
app.use('/', router)

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch((err) => {
    console.log('err: ', err)
})



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})