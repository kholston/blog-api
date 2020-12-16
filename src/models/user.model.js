import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const { Schema } = mongoose;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    accessLevel: {
      type: String,
      enum: ['Viewer', 'Author'],
      default: 'Author',
    },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  },
  { timestamps: true },
);

UserSchema.query.byUsername = function searchByUsername(username) {
  return this.where({ username: username });
};

UserSchema.virtual('url').get(function getAuthorUrl() {
  return `/authors/author/${this._id}`;
});

UserSchema.pre('save', async function hashPassword(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcryptjs.genSalt(SALT_WORK_FACTOR);
    const hash = await bcryptjs.hash(user.password, salt);

    user.password = hash;
  } catch (error) {
    return next(error);
  }
  return next();
});

UserSchema.pre('remove', function deleteAllPosts(next) {
  this.model('Post').deleteMany({ user: this._id }, next);
});

UserSchema.methods.comparePassword = async function comparePassword(
  candidatePassword,
  next,
) {
  try {
    const isMatch = await bcryptjs.compare(candidatePassword, this.password);
    return next(null, isMatch);
  } catch (error) {
    return next(error);
  }
};

const User = mongoose.model('User', UserSchema);
export default User;
