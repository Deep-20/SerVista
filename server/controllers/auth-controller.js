const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to root by router!!" });
  } catch (error) {
    res.status(400).send({ msg: "Page Not Found!!" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const UserExist = await User.findOne({ email: email });

    if (UserExist) {
      return res.status(400).json({ msg: "User Already Exists!!" });
    }

    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const UserCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({ 
      message: "Registration Successful", 
      token: await UserCreated.generateToken(), 
      userId: UserCreated._id.toString()
    });
  } catch (error) {
    res.status(500).json("Internal Server Error!!");
  }
};

const login = async(req, res) => {
  try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});
    
    if(!userExist){
      return res.status(400).json({message: "Invalid Credential!!"});
    }

    const user = await userExist.comparePassword(password);

    if(user){
      res.status(200).json({ 
        message: "Login Successful", 
        token: await userExist.generateToken(), 
        userId: userExist._id.toString()});
    }else{
      res.status(401).json({
        message: "Invalid Email or Password!!"
      });
    }

  } catch (error) {
    res.status(500).json("Internal Server Error!!");
  }
}

module.exports = { home, register, login};
