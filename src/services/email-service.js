const sender = require('../config/email-config')

const sendBasicEmail = (mailTo, mailFrom, mailSubject, mailBody) => {
    sender.sendMail({
        from: mailFrom,
        to : mailTo,
        subject : mailSubject,
        text : mailBody
    })
}

module.exports = sendBasicEmail