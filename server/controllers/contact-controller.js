const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        // const username = req.body.username;
        // const email = req.body.email;
        // const message = req.body.message;
        
        const response = req.body;

        await Contact.create(response);
        return res.status(200).json({message: "Message sent Successfully!!"});
    } catch (error) {
        return res.status(500).json({message: "Message not Delivered!!"});
    }
};

module.exports = contactForm;