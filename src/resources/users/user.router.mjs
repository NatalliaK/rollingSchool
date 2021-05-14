import { Router } from 'express';
import { User } from './user.model.mjs';
import { getAllUsers } from './user.service.mjs';

export const userRouter = Router();

userRouter.route('/').get(async (req, res) => {
  const users = await getAllUsers();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});
