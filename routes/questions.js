const express = require("express");
const router = express.Router();
const { auth, authRole } = require("../middleware/middleware");
const Question = require("../models/Question"); // imported models/Quiz.js
const Quiz = require("../models/Quiz"); // imported models/Quiz.js
//const User = require("../models/User"); // imported models/User.js

const { check, validationResult } = require("express-validator");

const { Types } = require("mongoose");
const { ObjectId } = Types;

//FOR - CRUD statements dependent on auth and role of user

//@route        GET api/questions/:quizId
//@desc         Get questions for selected quiz
//@access       Private

//conditional  roles
//@role         basic - questions only, viewer and admin - questions and answers
router.get("/:quizId", auth, authRole(["admin", "basic", "viewer"]), async (req, res) => {
  //res.send('Questions Only');
  try {
    const quizId = req.params.quizId;
    const questions = await Question.find({ quizId: ObjectId(quizId) }); // finds questions related to the quizId
    let questionsOnly = [];
    const role = req.user.role;
    //console.log(req.user.role)

    if (role.includes("admin") || role.includes("viewer") ) {
       // console.log(questions)
        res.json(questions);
    } else if (role === "basic"){
        questionsOnly = questions.map(question => question.questionText);
        res.json(questionsOnly);
    } else {
        res.json({ msg: 'Your role has not been recognised. Contact Database Administrator' })
    }

    //res.json(questions); //returns the questions
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


//@route        POST api/questions/:quizId
//@desc         Add new question and answers
//@access       Private
//@role         admin
router.post(
  "/:quizId",
  [
    auth,
    authRole("admin"),
    [
      check("questionText", "Please add a question").not().isEmpty(),
      check("answerOptions", "Please add 4 answer options").not().isEmpty(),
      check("correctAnswer", "Please add the correct answer to the question") //limitation no validation to ensure all 4 answer options are filled in the array
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    const { questionText, answerOptions, correctAnswer, quizId } = req.body; //pull out data using fields into request body

    try {
      const newQuestion = new Question({
        //create new instance of question
        questionText,
        answerOptions,
        correctAnswer,
        quizId
      });
      const question = await newQuestion.save(); //save in database

      res.json(question); //return question to client
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);


//@route        PUT api/questions/:quizId/:questionId
//@desc         Edit/update question and answers
//@access       Private
//@role         admin
router.put("/:quizId/:questionId", auth, authRole("admin"), async (req, res) => {
  const { questionText, answerOptions, correctAnswer, quizId, questionId } = req.body; //pull out data using fields into request body

  //Build question object
  const questionFields = {};
  if(questionText) questionFields.questionText = questionText;
  if(answerOptions) questionFields.answerOptions = answerOptions;
  if(correctAnswer) questionFields.correctAnswer = correctAnswer;

  try {    
  let question = await Question.findById(req.params.questionId); //Checks if question document exists to update it
    
    if(!question) return res.status(404).json({ msg: 'Question not found' });

    //UPDATE
    question = await Question.findByIdAndUpdate(question, //find the data in the db by id gets document. Gets the data id passed in via the URL params.
      { $set: questionFields }, // sets the fields we already have if I want to update them
      { new: true }); //allows you to add new fields and values 
      

      res.json(question); //sends the updates made to db

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


//@route        DELETE api/questions/:quizId/:questionId
//@desc         Delete question and answers
//@access       Private
//@role         admin
router.delete("/:quizId/:questionId", auth, authRole("admin"), async (req, res) => {
  try {
    let question = await Question.findById(req.params.questionId); //finds the question

    console.log(question);

    if(!question) return res.status(404).json({ msg: 'Question not found' });

    //await Question.findByIdAndRemove(req.params.questionId); //Deletes the document based on selected questionId
    await Question.findByIdAndRemove(question); //Deletes the document based on selected questionId

      res.json({ msg: 'Question has been deleted' })
  
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
