import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMassage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMassage){
            conversation.messages.push(newMassage._id);
        }

        res.status(201).json(newMassage);

    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"});
    }
}