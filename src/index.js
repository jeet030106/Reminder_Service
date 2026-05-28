const express= require('express')
const {PORT} = require('./config/server-config')
const bodyParser = require('body-parser')
const serverConfig = require('./config/server-config')
const sendEmail = require('./services/email-service')
const job = require('./util/job')
const TicketController = require('./controller/ticket-controller')

const setUpAndStartServer = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`)
        app.post('/api/v1/tickets',TicketController.create)
        // sendEmail(
        //     'jeetmulani2006@gmail.com',
        //     'hawktuah030106@gmail.com',
        //     'Testing mail',
        //     'This is a testing Email, if not received then check!'
        // )
        job()
    })
}

setUpAndStartServer()