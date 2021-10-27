const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    quizTitle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:true,
        default: Date.now
    }
    //How do you include update date and timestamp in schema or MongoDB?
});

module.exports = mongoose.model('quiz', QuizSchema);