const mongoose =require('mongoose')


const userSchema= mongoose.Schema({

    name: {
        type:String,
        required:true,        
    },
    email: {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
    type:{
        enums:['manager','customer','admin'],
        required:true
    },
   
    
   
});
const User = mongoose.model('user',userSchema);
module.exports = User