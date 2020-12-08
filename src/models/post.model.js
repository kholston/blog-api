import mongoose from 'mongoose';
const { Schema } = mongoose;

const PostSchema = new Schema({
  title:{type: String, required: true},
  byline:{type: String},
  author:{type: Schema.Types.ObjectId, ref: 'User', required: true},
  body:{type: String, required: true},
  publish:{type: Boolean ,required: true},
  publishDate:{type: Date}
}, {timestamps: true});

PostSchema
  .virtual('url')
  .get(function(){
    return '/posts/post/' + this._id;
  });
  
PostSchema.pre('remove', function(next){
  this.model("Comment").deleteMany({post:this._id}, next);
});
  
const Post = mongoose.model('Post', PostSchema);
export default Post;
