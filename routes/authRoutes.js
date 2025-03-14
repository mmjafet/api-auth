
const express = require("express");

router.post("/login",loginController);
router.post("/signup",signupController);

module.exports = router;