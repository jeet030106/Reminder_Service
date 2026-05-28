const {NotificationTicket} = require('../models/index')

class TicketRepository{

    async getAll(){
        try{
            const response= await NotificationTicket.findAll()
            return response
        }catch (error){
            throw(error)
        }
    }
}

module.exports=TicketRepository