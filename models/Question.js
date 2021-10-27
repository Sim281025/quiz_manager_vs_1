const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quizzes'
    },
    questionText: {
        type: String,
        required: true
    },
    answerText1: {
        type: String,
        required: true,
    },
    answerText2: {
        type: String,
        required: true,
    },
    answerText3: {
        type: String,
        required: true,
    },
    answerText4: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:true,
        default: Date.now
    }
});

module.exports = mongoose.model('question', QuestionSchema);