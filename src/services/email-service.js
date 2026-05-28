const sender = require('../config/email-config')
const TicketRepository = require('../repository/ticket-repository')
const repo=new TicketRepository()

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
        const response= await repo.getAll()
        return response
    }catch (error){
        throw(error)
    }
}

const createTicket = async(data) => {
    try{
        const response = await repo.create(data)
        return response
    }catch (error){
        throw(error)
    }
}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createTicket
}