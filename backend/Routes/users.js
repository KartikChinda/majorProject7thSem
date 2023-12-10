import express from 'express';

import { getUsers, createUser, getPassword } from '../Controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.get('/password', getPassword);

export default router; 