import express from 'express';
import { getAllUsers, Login, Register } from '../controllers/main.controller';
import { userSchema } from '../models/user.schema';
import {validate} from '../zod_middleware/validate'

export const router=express.Router();

router.get('/',getAllUsers);
router.post('/register',validate(userSchema),Register);
router.post('/login',Login);

