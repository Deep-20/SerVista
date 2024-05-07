const User = require("../models/user-model");

const home = async (req, res) => {
    try{
        res.status(200).json({message: "Welcome to root by router!!"});
    }
    catch(error){
        res.status(400).send({msg : "Page Not Found!!"});
    }
}

const register = async(req, res) => {
    try{
        const {username, email, phone, password} = req.body;

        const UserExist = await User.findOne({email: email});

        if(UserExist){
            return res.status(400).json({msg: "User Already Exists!!"});
        }
        
        const UserCreated = await User.create({username, email, phone, password});

        res.status(200).json({message: UserCreated});
    }
    catch(error){
        res.status(400).send({msg : "Page Not Found!!"});
    }
}

module.exports = {home, register};