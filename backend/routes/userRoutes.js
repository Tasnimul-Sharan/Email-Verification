const express = require('express');
const { registerUser, verifyUser, loginUser, resendCode } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify', verifyUser);
router.post('/login', loginUser);
router.post('/resend-code', resendCode);


module.exports = router;
