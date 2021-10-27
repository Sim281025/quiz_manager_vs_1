const express = require('express');
const router = express.Router();
const User = require('../models/User');// imported models/User.js
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

//FOR USER REGISTRATION


//@route       POST api/users
//@desc         Register a user        
//@access       Public
//@roles        all
router.post(
    '/', 
    [   //express validator
        check('name', 'Please add name')
            .not()
            .isEmpty(),
        check('email', 'Please use a valid email')
            .isEmail()
            .trim(),
        check('password', 'Please enter a password with 6 or more characters')
            .isLength({ min:6 })
            .trim()
    ], 
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() }); //Will display errors
        }

        //res.send('successful sign in!')

        const { name, email, password, role } = req.body; //from mongoose model

        try {
            let user = await User.findOne({ email });// find user based on email field from mongoose method findOne()

            if(user) {
                return res.status(400).json({ msg: "User already exists" }); //status 400 is a bad request
                console.log('user already exits')
            }

            //Create new instance of user as an object
            user = new User({
                name,
                email,
                password,
                role
            });

            //Salt the password to encrypt the password. Uses 10 rounds (default)
            const salt = await bcrypt.genSalt(10);

            //add the salt to the hash
            user.password = await bcrypt.hash(password, salt);

            //save to db
            await user.save();

            //res.send('user saved') //test user saved in db

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'), {  //gets secret from config folder default.js
                expiresIn: 3600000   //expires token if it were in production not really needed
            }, (err, token) => {
                if(err) throw err;
                res.json({ token }); //if no error then respons is json token that is sent to client side
            });
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;