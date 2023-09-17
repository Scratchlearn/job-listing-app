const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt');
const User = require('../model/schemaModel');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');



// POST /api/register
router.post('/', async (req, res) => {
  try {
    const { name, email,mobile, password } = req.body;
  

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);


    // Create a new user
    const newUser = new User({ name, email,mobile, password: hashedPassword });
    await newUser.save();

    

    const token = jwt.sign({ userId: newUser._id }, secretKey, {
      expiresIn: '1h', // Set the token expiration time as needed
    });



    res.status(201).json({ message: 'User registered successfully',token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
