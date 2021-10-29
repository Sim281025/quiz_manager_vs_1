const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema ({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    quizTitle: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required:true,
        default: Date.now
    }, 
    updatedAt: {
        type: Date,
        required:true,
        default: Date.now
    }, 
    //How do you include update date and timestamp in schema or MongoDB?
});

module.exports = mongoose.model('quiz', QuizSchema);