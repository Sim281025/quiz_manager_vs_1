const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  // userId: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'users'
  // },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "quizzes",
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
  },
  // createdAt: {
  //     type: Date,
  //     required:true,
  //     default: Date.now
  // },
  // updatedAt: {
  //     type: Date,
  //     required:true,
  //     default: Date.now
  // },
  //timestamps: {
  //   createdAt: true,
  //   updatedAt: false
  // },
});

//line below will automatically generate createdAt and updatedAt fields
QuestionSchema.set("timestamps", true);

module.exports = mongoose.model("question", QuestionSchema);
