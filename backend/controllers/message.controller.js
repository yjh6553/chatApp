import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        //req.user._id comes from req.user = user from protectRoute.js
        const senderId = req.user._id

        //find a conversation from data base
        let conversation = await Conversation.findOne({
            participants : { $all: [senderId, receiverId]},
        })

        //if there is no conversation match with id, create new one
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        
        //Check with original if there is problem later
        conversation.messages.push(newMessage._id)
        
        //save updated conversation and message into server.
        // await conversation.save()
        // await newMessage.save()

        //using Promise to reduce the time. 
        await Promise.all([conversation.save(), newMessage.save()])

        
        res.status(201).json(newMessage)

    } catch (error) {
        console.log("Error in sendMessage controller", error.message)
        res.status(500).json({ 
            error: "Internal server error.",
            message: error.message
    })
    }
}

export const getMessages = async (req, res) => {
    try {
        const userToChatId = req.params.id
        //req.user set by authentication middleware `protectRoute.js`
        const senderId = req.user._id

        //find conversations by ids and get the message object, not ref.
        //populate comes from Mongoose
        const conversation = await Conversation.findOne(
            { 
                participants: { $all: [userToChatId, senderId] }
            }
        ).populate("messages")
        
        //check with if statment if there is a match or not. 
        if(!conversation) return res.status(200).json([])

        const message = conversation.messages
        res.status(200).json(message)

    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({ 
            error: "Internal server error.",
            message: error.message
        })
    }
}