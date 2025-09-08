
import { Router } from 'express';
import routerPost from '../controllers/routes.controller.js'; 

const router = Router();

router.get('/coucou', (req, res) => {
    res.send('route 1 !');
});

router.get('/', (req, res) => {
   res.send('route 2 !');
});

router.post('/', routerPost);

export default router;
