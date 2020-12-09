import User from '../models';

const userSignUpPost = (req, res) => {
  res.json({
    message: 'user sign up post',
  });
};

const authorSignUpPost = [
  (req, res, next) => {
    res.json({
      message: 'author sign up post',
    });
  },
];
const userInfoGet = (req, res) => {
  res.json({
    message: 'user info get',
  });
};

const signInPost = [
  (req, res, next) => {
    res.json({
      message: 'sign in post',
    });
  },
];
const logoutGet = (req, res) => {
  res.json({
    message: 'log out get',
  });
};

export default {
  userSignUpPost,
  authorSignUpPost,
  userInfoGet,
  signInPost,
  logoutGet,
};
