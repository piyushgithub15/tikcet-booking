const mongoose =require('mongoose')


const eventSchema= mongoose.Schema({

    name: {
        type:String,
        required:true,
        unique:true
    },
    location: {
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
    organiser:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    managerId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
   
});
const Event = mongoose.model('Order',eventSchema);
module.exports ={Event}