import { Router } from 'express';
import { PostController } from '../controllers';

const router = Router();

router.get('/', PostController.postsAllGet);
router.post('/post/create', PostController.postCreate);
router.get('/post/:id', PostController.postGet);
router.post('/post/:id', PostController.postUpdate);
router.delete('/post/:id/delete', PostController.postDelete);

export default router;
