const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller.js");
const contactValidator = require("../validators/contact-validator.js");
const validate = require("../middlewares/validate-middleware.js");

router.route("/contact").post(validate(contactValidator), contactForm);

module.exports = router;