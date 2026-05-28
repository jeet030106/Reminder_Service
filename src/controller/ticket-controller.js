const TicketService = require('../services/email-service')

const create = async (req,res) =>{
    try{
        const response= await TicketService.createTicket(req.body)
        return res.status(201).json({
            data: response,
            error: {},
            success: true,
            message: "Ticket created succesfully"
        })
    }catch (error){
        return res.status(500).json({
            data: {},
            error: {error},
            success:false,
            message: "Unable to create email reminder"
        })
    }
}

module.exports = {
    create
}