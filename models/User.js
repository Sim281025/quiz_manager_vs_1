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