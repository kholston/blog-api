import 'dotenv/config';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportjwt from 'passport-jwt';
import { User as UserModel } from '../models';

const JWTStrategy = passportjwt.Strategy;
const ExtractJWT = passportjwt.ExtractJwt;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    let user;
    try {
      user = await UserModel.find().byUsername(username).exec();
      if (!user) {
        return done(null, false, { message: 'Incorrect username or password' });
      }

      return done(null, user, { message: 'Logged In Sucessfully' });
    } catch (err) {
      return done(err);
    }
  }),
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET,
    },
    async (jwtPayload, done) => {
      try {
        const user = await UserModel.findOneById(jwtPayload.id);
        if (!user) throw new Error('User not found');
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    },
  ),
);
