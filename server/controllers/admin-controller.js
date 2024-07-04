const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// * ---------------------
// getAllUsers Logic
// * ---------------------
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No Users Found!!" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// * ---------------------
// getAllContacts Logic
// * ---------------------
const getAllConatcts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No Contact Message Found!!" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

// * ---------------------
// Get single User Logic
// * ---------------------

const getUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("ID from getsuerbyId: ", id);
    const data = await User.findOne({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// * ---------------------
// Update single User Logic
// * ---------------------

const updateUserById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    console.log("User data in user update: ", updatedUserData);
    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updatedUserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

// * ---------------------
// deleteUserById Logic
// * ---------------------

const deleteUserById = async (req, res, next) => {
  try {
    const id = req.params.id;

    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getAllConatcts,
  deleteUserById,
  getUserById,
  updateUserById,
};
