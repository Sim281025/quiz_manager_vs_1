const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  quizTitle: {
    type: String,
    required: true,
  }
});

//line below will automatically generate createdAt and updatedAt fields
QuizSchema.set("timestamps", true);

module.exports = mongoose.model("quiz", QuizSchema);
