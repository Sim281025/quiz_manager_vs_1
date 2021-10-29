const express = require("express");
const router = express.Router();
const { auth, authRole } = require("../middleware/middleware");
const Question = require("../models/Question"); // imported models/Quiz.js
const Quiz = require("../models/Quiz"); // imported models/Quiz.js
const User = require("../models/User"); // imported models/User.js

const { check, validationResult } = require("express-validator");

//FOR - CRUD statements dependent on auth and role of user

//@route        GET api/questions/:quizId
//@desc         Get questions only for selected quiz
//@access       Private

//conditional rendering for roles
//@role basic all questions
//@role viewer and admin questions and answers
router.get("/:quizId", auth, async (req, res) => {
  //res.send('Questions Only');
  try {
    //const question = await Question.findById(req.quiz.id); //cannot read property 'id' undefined

    // const { quizId, questionText, answerOptions, correctAnswer } = req.body;
    // let question = await question.findOne({ quizId });
    // question = new Question({
    //   quizId,
    //   questionText,
    //   answerOption,
    //   correctAnswer,
    // });                                  //cannot access 'question' before initialisation

    // const questions = await Question.find({
    //     quizId: ObjectId,
    //   });        //objectId is not defined

    const questions = await Question.find({}); // returns an empty array of all questions but they are not linked to the a quizId?
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(" Server error");
  }
});

//@route        GET api/questions/question
//@desc         Get questions and answers for the quiz
//@access       Private
//@role         viewer and admin
// router.get('/question', (req, res) => {
//     res.send('Display Questions and answers (show correct answers maybe?)');
// });

//@route        POST api/questions/question
//@desc         Add new question and answers
//@access       Private
//@role         admin
router.post("/question", auth, authRole("admin"), (req, res) => {
  res.send("Add questions and answers");
});

//@route        PUT api/questions/question/:id
//@desc         Edit/update question and answers
//@access       Private
//@role         admin
router.put("/question/:id", auth, authRole("admin"), (req, res) => {
  res.send("Edit Questions and answers");
});

//@route        DELETE api/questions/question/:id
//@desc         Delete question and answers
//@access       Private
//@role         admin
router.delete("/question/:id", auth, authRole("admin"), (req, res) => {
  res.send("Delete questions and answers");
});

module.exports = router;
