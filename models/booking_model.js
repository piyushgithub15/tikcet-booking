const mongoose =require('mongoose');
const User = require('../models/user_model');
const Event=require('../models/event_model');


const bookingSchema= mongoose.Schema({

    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Event'
    },
    totalPrice:{
        type:Number,
    },
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    quantity :{
        type:Number,
        required:true,
        min:1,
        max:5
    }

});
const Booking = mongoose.model('Bookings',bookingSchema);
module.exports = Booking

