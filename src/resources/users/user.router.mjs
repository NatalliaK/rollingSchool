import { Router } from 'express';
import { User } from './user.model.mjs';
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
} from './user.service.mjs';

export const userRouter = Router();

userRouter.route('/').get(async (req, res) => {
  const users = await getAllUsers();
  // map user fields to exclude secret fields like "password"
  if (users) {
    res.status(200).json(users.map(User.toResponse));
  } else {
    res.status(404).send('Users not found');
  }
});

userRouter.route('/').post(async (req, res) => {
  const { login, password, name } = req.body;
  const user = await createUser(new User({ login, password, name }));

  if (user) {
    res.status(201).json(User.toResponse(user));
  } else {
    res.status(404).send('User not created');
  }
});

userRouter.route('/:id').get(async (req, res) => {
  const user = await getUser(req.params.id);

  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

userRouter.route('/:id').put(async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const user = await updateUser({ id, ...body });

  if (user) {
    res.status(200).json(User.toResponse(user));
  } else {
    res.status(404).send('User not update');
  }
});

userRouter.route('/:id').delete(async (req, res) => {
  const user = await removeUser(req.params.id);

  if (user) {
    res.status(204).json(User.toResponse(user));
  } else {
    res.status(404).send('User not removed');
  }
});
