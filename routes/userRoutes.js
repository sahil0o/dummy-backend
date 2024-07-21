import express from 'express';
import { createUser, getUserByEmail } from '../controller/userController';

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to get a user by email
router.get('/users/:email', getUserByEmail);

export default router;
