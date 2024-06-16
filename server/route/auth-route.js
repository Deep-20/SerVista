const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validator = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authcontrollers.home);
router
  .route("/register")
  .post(validate(validator.signupSchema), authcontrollers.register);
router
  .route("/login")
  .post(validate(validator.loginSchema), authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router;
