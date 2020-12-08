import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;


const UserSchema = new Schema({
  username:{type: String, unique: true, required: true},
  password:{type: String, required: true},
  name:{type: String, required: true},
  accessLevel:{type: String, enum:["Viewer","Author"], default: "Author"}
}, {timestamps:true})

UserSchema
  .virtual('url')
  .get(function(){
    return "/authors/author/" + this._id;
  });
  
UserSchema.pre('save', function(next) {
  let user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcryptjs.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) { return next(err) }
    bcryptjs.hash(user.password, salt, function(err, hash) {
      if (err) { return next(err) }
      user.password = hash;
      next();
    });
  });
});

UserSchema.pre('remove', function(next){
  this.model('Post').deleteMany({user: this._id}, next)
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcryptjs.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


const User = mongoose.model("User", UserSchema);
export default User;