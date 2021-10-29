const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { auth } = require('../middleware/middleware');
//const authRole = require('../middleware/authRole');

//FOR LOGIN
//OVERVIEW - GET THE USER AND JWT TOKEN


//@route        GET api/auth
//@desc         Login a user        
//@access       Private/protected
//@roles        all
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); //Do not return password in response for security reasons
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route        POST api/auth
//@desc         Authenticate user & get token  when they login      
//@access       Public
//@roles        all
router.post('/',
 [
     //Express
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password is required').exists()
 ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); //Will display errors
        }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email}); //check the email

        if(!user) {
            return res.status(400).json({ msg: 'Invalid login' });
        }

        const isMatch = await bcrypt.compare(password, user.password); //check the password string and hash password stored in the database and compares the two

        if(!isMatch) {
            return res.status(400).json({ msg: 'Invalid login' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role,
                name: user.name
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {  //gets secret from config folder default.js to sign and generate token
            expiresIn: 3600000   //expires token if it were in production not really needed
        }, (err, token) => {
            if(err) throw err;
            res.json({ token }); //if no error then response is json token that is sent to client side
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;