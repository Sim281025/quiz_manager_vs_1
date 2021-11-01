const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "basic",
  },
  /* role: {
        type: String,
        enum: ['basic', 'viewer', 'admin'],
        default: 'basic
    }*/
});

//line below will automatically generate createdAt and updatedAt fields
UserSchema.set("timestamps", true);

module.exports = mongoose.model("user", UserSchema);
