const Event =require('../models/event_model');
const mongoose =require('mongoose')
const User = require('../models/user_model');

//adding a event
exports.createEvent =async(req,res)=>{
    try{
        const user = await User.find({_id:req.body.managerId})
        if(user.type==='customer')
        return res.status(400).send('managerId is invalid ');

            const {
                name,
                location,
                price,
                quantity,
                organiser,
                category,
                managerId
            }=req.body
            const event = await Event.create({
                name,
                location,
                price,
                quantity,
                organiser,
                category,
                managerId
            })
            res.status(201).json({
            success: true,
            message:"Event created successfully",
        });
    
            
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });
            

    }    
    
}

//getting all the events
exports.getAllEvents = async(req,res)=>{
    try{

        const events = await Event.find();
        
        res.status(201).json({
            success: true,
            
            data:events
        });
        

    }catch(error){

        console.log(error);
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });

    } 

}

//getting a particular event
exports.getEvent = async(req,res)=>{

    try{
        const event = await Event.findById(req.params.id)

        res.status(201).json({
            success: true,
            
            data:event
        });

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });


    } 

}

//delete a event
exports.deleteEvent =async(req,res)=>{
    try{
        const deletedEvent = await Event.findByIdAndDelete(req.params.id)

        if(!deletedEvent)
        return res.status(404).send("EVENT NOT FOUND")
        res.status(201).json({
            success: true,
            message:"event deleted successfully",
            data:deletedEvent
        });

        

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });

    } 

}

//update a event
exports.updateEvent =async(req,res)=>{
    try{
        const updatedEvent = await Event.findByIdAndUpdate(req.params.id,req.body)

        res.status(201).json({
            success: true,
            
            data:updatedEvent
        });
        

    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });


    } 

}

