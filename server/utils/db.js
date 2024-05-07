const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connection successful!!");
    } catch (error) {
        console.log(error);
        console.error("Connection to database failed!!");
        exit(0);
    }
};

module.exports = connectDb;