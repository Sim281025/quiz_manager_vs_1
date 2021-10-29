const express = require("express");
const router = express.Router();
const User = require("../models/User"); // imported models/User.js
const Quiz = require("../models/Quiz"); // imported models/Quiz.js
const { check, validationResult } = require("express-validator");
const { auth, authRole } = require("../middleware/middleware");
//const quiz = require('../models/quiz');

//FOR DASHBOARD OF QUIZZES FOR USERS TO SELECT

//@route        GET api/quizzes
//@desc         Get all quizzes titles
//@access       Private
//@roles        all

router.get("/", auth, async (req, res) => {
  //pull from db

  try {
    //const quizzes = await Quiz.find({ userId: req.user.id }).sort({ date: -1 });
    const quizzes = await Quiz.find().sort({ date: -1 }); //finds all the quizzes from db and sorts the array into date order of most recent first
    res.json(quizzes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

//@route        POST api/quizzes
//@desc         Get all quizzes titles
//@access       Private
//@roles        admin/none

router.post(
  "/",
  [
    auth,
    authRole("admin"),
    [check("quizTitle", "Quiz title is required").not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); //Will display errors
    }

    const { quizTitle } = req.body; //pull out data from the body specified in model

    try {
      // if (req.user.role !== 'admin')
      //     return res.status(403).json({ msg: 'Forbidden: You are not authorised' });

      const newQuiz = new Quiz({
        quizTitle,
        userId: req.user.id,
      });

      const quiz = await newQuiz.save(); //saves the quiz instance in the db
      res.json(quiz);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error"); //Only backend can see this error
    }
  }
);

module.exports = router;
