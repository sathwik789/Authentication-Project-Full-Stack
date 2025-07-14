import express from 'express';
import { signup } from '../controllers/SignUpController.js';
import { login } from '../controllers/LoginController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Protected route example
router.get('/profile', protect, (req, res) => {
  res.json({ message: `Hello ${req.user.email}, this is your profile route!` });
});

export default router;
