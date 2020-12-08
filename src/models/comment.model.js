import mongoose from 'mongoose';
const { Schema } = mongoose;

const CommentSchema = new Schema({
  author:{ type: Schema.Types.ObjectId, ref: "User", required: true },
  body:{ type: String, required: true },
  post:{ type: Schema.Types.ObjectId , ref:"Post", required: true }
}, { timestamps: true });


const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;