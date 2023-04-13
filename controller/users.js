const  User = require("../models/user_model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.signUp = async (req, res) => {
  try {
    if (!req.body.email || !req.body.name || !req.body.password) {
      res.status(400).json({success: false , message: "Pass correct data", data: []});
      return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(200).json({ success: false , message: "User Already Exists !", data: []});
      return;
    } 
    const password = await bcrypt.hashSync(req.body.password, saltRounds);
    const {
      name,email,contactNo
    }=req.body;
    const newUser= await User.create({
      name,email,contactNo,password
    });
   
    
   
    const token = await jwt.sign({ newUser }, "fake-jwt-secret");
    res.status(201).json(
      {
        success: true,
        message: "User Created Succefully ",
        data: {
          name: newUser.name,
          email: newUser.email,
          id: newUser.id,
          access_token:token
         
       },
      });
  } catch (error) {
    res.status(404).json({ success: false , message: "Something Went Wrong !", data: error });
  }
};

exports.logIn = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      res.status(400).json({success: false , message: "Pass correct data", data: []});
      return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(204).json({success: false , message: "User not found !", data: []});
      return;
    }

    if (!(await bcrypt.compare(req.body.password, user.password))) {
      res.status(200).json({success: false , message: "Wrong password", data: [] });
      return;
    }

    const token = await jwt.sign({ user }, "fake-jwt-secret");

    res.status(201).json(
      {
        success: true,
        message: "User Successfully Logged ",
        data: {
          name: user.name,
          email: user.email,
          id: user.id,
          access_token: token,
        },
      }
      );
  } catch (error) {
    res.status(404).json({ success: false , message: "Something went wrong !", data: error });
  }
}

exports.deleteUser = async(req,res)=>{

  try{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if(!deletedUser)
    return res.status(404).send("EVENT NOT FOUND")
    res.status(201).json({
        success: true,
        message:"User deleted successfully",
        data:deletedUser
    });

  }catch(error){
    
    res.status(500).json({
        success: false,
        message: 'An Error occured',
    });

  }

}

exports.updateUser = async(req,res)=>{

  try{

    const updatedEvent = await Event.findByIdAndUpdate(req.params.id,req.body)

        res.status(201).json({
            success: true,
            
            data:updatedEvent
        });

  }catch(error){

    
        res.status(500).json({
            success: false,
            message: 'An Error occured',
        });
    
  }

}