import passport from 'passport';
import { Router } from 'express';
import { PostController } from '../controllers';

const router = Router();

router.get('/', PostController.postsAllGet);

router.get('/post/:id', PostController.postGet);
// Protected Routes
router.post(
  '/post/create',
  passport.authenticate('jwt', { session: false }),
  PostController.postCreate,
);
router.post(
  '/post/:id',
  passport.authenticate('jwt', { session: false }),
  PostController.postUpdate,
);
router.delete(
  '/post/:id/delete',
  passport.authenticate('jwt', { session: false }),
  PostController.postDelete,
);

export default router;
