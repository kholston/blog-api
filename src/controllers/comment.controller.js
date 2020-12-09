import Comment from '../models';

// get all comments
const commentAllGet = (req, res) => {
  res.json({
    message: 'Get all comments',
  });
};
// create a comment
const commentCreate = [
  (req, res, next) => {
    res.json({
      message: 'create comment post',
    });
  },
];
// get a comment
const commentGet = (req, res) => {
  res.json({
    message: 'Get a comment',
  });
};
// update a comment
const commentUpdate = [
  (req, res, next) => {
    res.json({
      message: 'update comment post',
    });
  },
];
// delete a comment
const commentDelete = (req, res, next) => {
  res.json({
    message: 'comment delete post',
  });
};

export default {
  commentAllGet,
  commentCreate,
  commentGet,
  commentUpdate,
  commentDelete,
};
