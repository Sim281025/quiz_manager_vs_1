const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  // userId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'users'
  // },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizzes",
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answerOptions: [
    {
      type: String,
      required: true,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  }
});

//line below will automatically generate createdAt and updatedAt fields
QuestionSchema.set("timestamps", true);

module.exports = mongoose.model("question", QuestionSchema);
