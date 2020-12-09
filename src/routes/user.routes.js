import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.post('/user-sign-up', UserController.userSignUpPost);
router.post('/author-sign-up', UserController.authorSignUpPost);
router.get('/user-info', UserController.userInfoGet);
router.post('/sign-in', UserController.signInPost);
router.get('/logout', UserController.logoutGet);

export default router;
