import Post from '../models';

// get all post
const postsAllGet = (req, res) => {
  res.json({
    message: 'get all post',
  });
};

// get specific post
const postGet = (req, res) => {
  res.json({
    message: 'get specific post',
  });
};
// create post
const postCreate = [
  (req, res, next) => {
    res.json({
      message: 'post create post',
    });
  },
];
// update specific post
const postUpdate = [
  (req, res, next) => {
    res.json({
      message: 'post update post',
    });
  },
];
// delete specific post
const postDelete = (req, res, next) => {
  res.json({
    message: 'post delete post',
  });
};

export default {
  postsAllGet,
  postGet,
  postCreate,
  postUpdate,
  postDelete,
};
