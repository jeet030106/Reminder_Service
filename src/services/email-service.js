const sender = require('../config/email-config')
const TicketRepository = require('../repository/ticket-repository')

const sendBasicEmail = (mailTo, mailFrom, mailSubject, mailBody) => {
    sender.sendMail({
        from: mailFrom,
        to : mailTo,
        subject : mailSubject,
        text : mailBody
    })
}

const fetchPendingEmails = async(timestamp) => {
    try{
        const repo=new TicketRepository()
        const response= await repo.getAll()
        return response
    }catch (error){
        throw(error)
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails
}