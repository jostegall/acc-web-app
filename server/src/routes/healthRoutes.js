import {Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'AAC backend is running',
    });
});

export default router;