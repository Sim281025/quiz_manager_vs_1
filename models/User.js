const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required:true,
        default: Date.now
    }, 
    updated: Date,
    role: {
        type: String,
        required: true,
        default: 'basic'
    }
/* role: {
        type: String,
        enum: ['basic', 'viewer', 'admin'],
        default: 'basic
    }*/
});

module.exports = mongoose.model('user', UserSchema);