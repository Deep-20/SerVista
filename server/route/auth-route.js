const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validator = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(validator.signupSchema), authcontrollers.register);
router.route("/login").post(validate(validator.loginSchema), authcontrollers.login);

module.exports = router;