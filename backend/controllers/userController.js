const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      console.log('Received registration request:', { username, email, password });
  
      const userExists = await User.findOne({ email });
  
      if (userExists) {
        console.log('User already exists');
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log('Password hashed successfully');
  
      const verificationToken = crypto.randomBytes(64).toString('hex');
      console.log('Verification token generated:', verificationToken);
  
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        verificationToken,
      });
  
      console.log('User created:', user);
  
      const verificationUrl = `http://localhost:5000/api/users/verify/${verificationToken}`;
      console.log('Verification URL:', verificationUrl);
  
      await sendEmail({
        to: user.email,
        subject: 'Verify your email',
        text: `Click this link to verify your email: ${verificationUrl}`,
      });
  
      res.status(201).json({ message: 'Registration successful, please check your email to verify your account.' });
    } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  

exports.verifyUser = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();
    res.status(200).json({ message: 'Email verified successfully' });
    res.redirect('http://localhost:3000/email-verified')
  } catch (error) {
    console.error('Email verification failed:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: 'Please verify your email first' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Login failed:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
