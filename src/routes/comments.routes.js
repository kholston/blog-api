import { Router } from 'express';
import { CommentController } from '../controllers';

const router = Router();

router.get('/', CommentController.commentAllGet);
router.post('/comment/create', CommentController.commentCreate);
router.get('/comment/:id', CommentController.commentGet);
router.post('/comment/:id', CommentController.commentUpdate);
router.delete('/comment/:id/delete', CommentController.commentDelete);

export default router;
