const express= require('express')
const {PORT} = require('./config/server-config')
const bodyParser = require('body-parser')
const serverConfig = require('./config/server-config')

const setUpAndStartServer = () => {
    const app = express()
    app.use(bodyParser.json)
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
    })
}

setUpAndStartServer()