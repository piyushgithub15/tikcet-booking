const User = require('../models/booking_model')
const Booking = require('../models/booking_model')
const Event = require('../models/event_model')



//book a event
exports.bookEvent = async(req,res)=> {

    try{
        const thisEvent = await Event.findById(req.body.event);
        const totalPrice = thisEvent.price * req.body.quantity;
        const {userId,event} =req.body 
        thisEvent.quantity = thisEvent.quantity-req.body.quantity;

        const booking = await Booking.create({
            userId,event,totalPrice
        })

        res.status(201).json({
            success: true,
            
            data:booking
        });


    }catch(error) {

        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });

    }

}

//show all bookings
exports.showBookings  = async(req,res)=> {

    try{

        const userId = req.body.userId;
        const bookings = await Booking.find({userId:req.body.userId});

        res.status(201).json({
            success: true,
            
            data:bookings
        });



    }catch(error) {
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });


    }

}

//cancel all bookings

exports.cancelBookings = async(req,res)=> {

    try{

        const deletedBookings = await Booking.deleteMany({userId:req.params.id});

        res.status(201).json({
            success: true,
            
            data:deletedBookings
        });



    }catch(error) {
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });

    }

}

//cancel one booking

exports.cancelOneBookings = async(req,res)=> {

    try{
        const deletedBooking = await Booking.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            
            data:deletedBooking
        });
        


    }catch(error) {

        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });

    }

}
