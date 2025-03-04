const router = require("express").Router();
const {loginController, signupController} = require("../Controller/authController");


router.post("/login",loginController);
router.post("/signup",signupController);

module.exports = router;