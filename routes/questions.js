const express = require("express");
const router = express.Router();
const { auth, authRole } = require("../middleware/middleware");
const Question = require("../models/Question"); // imported models/Quiz.js
const Quiz = require("../models/Quiz"); // imported models/Quiz.js
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
    //const quizzes = await Quizzes.find({ userId: req.user.id }).sort({ date: -1 }); //finds the user objectID from db and sorts the array into date order of most recent first
    const questions = await Question.find({
      //quizId: _id instanceof mongoose.Types.ObjectId,
      //quiz: req.quiz.id,
      //quiz: ObjectId(id),
      quiz: { $in: quizzes },
    });
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
