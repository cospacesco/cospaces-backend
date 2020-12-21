const mongoose = require('mongoose'); 
  
const UserSchema = new mongoose.Schema({ 
    id: Number,
    username: String,
    email: String,
    password: String,
    profile_picture: String,
    coSpaces: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CoSpace'
        }
    ]
}, { timestamps: true }); 


UserSchema.statics.toApiAllUsersSchema = function (array) {
    return array.map((user) => user.toApiUserSlimSchema());
};

UserSchema.methods.toApiUserSchema = function() { 
  return {
    id: this.id,
    username: this.username,
    email: this.email,
    profile_picture: this.profile_picture,
    coSpaces: this.coSpaces
  };
}

UserSchema.methods.toApiUserSlimSchema = function() {
  return {
    id: this.id,
    username: this.username,
    email: this.email,
    profile_picture: this.profile_picture,
  };
}

module.exports = mongoose.model( 'User', UserSchema, 'users'); 
