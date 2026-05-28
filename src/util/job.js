const cron= require('node-cron')
const emailService = require('../services/email-service')

const setUpJob = () => {
    cron.schedule("*/1 * * * *",async () => {
        const response= await emailService.fetchPendingEmails();
        console.log(response)
    })
}

module.exports = setUpJob