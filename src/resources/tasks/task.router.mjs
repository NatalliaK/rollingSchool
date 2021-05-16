import { Router } from 'express';
import { createTask, getAllTasks, getTask, removeTask, updateTask } from './task.service.mjs';
import { Task } from './task.model.mjs';

export const taskRouter = Router();

taskRouter.route('/').get(async (req, res) => {
  const tasks = await getAllTasks();
  if (tasks) {
    res.status(200).json(tasks.map(Task.toResponse));
  } else {
    res.status(404).send('Tasks not found');
  }
});

taskRouter.route('/').post(async (req, res) => {
  const { title, order, description, userId, columnId, boardId } = req.body;
  console.log('req', req.body);

  const task = await createTask(
    new Task({ title, order, description, userId, columnId, boardId })
  );

  if (task) {
    res.status(201).json(Task.toResponse(task));
  } else {
    res.status(404).send('Task not created');
  }
});

taskRouter.route('/:id').get(async (req, res) => {
  const user = await getTask(req.params.id);

  if (user) {
    res.status(200).json(Task.toResponse(user));
  } else {
    res.status(404).send('User not found');
  }
});

taskRouter.route('/:id').put(async (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const task = await updateTask({ id, ...body });

  if (task) {
    res.status(200).json(Task.toResponse(task));
  } else {
    res.status(404).send('Task not updated');
  }
});

taskRouter.route('/:id').delete(async (req, res) => {
  const task = await removeTask(req.params.id);

  if (task) {
    res.status(204).json(Task.toResponse(task));
  } else {
    res.status(404).send('Task not found');
  }
});
