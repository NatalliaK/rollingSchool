import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { TASKS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = TASKS;

const checkExistentTask = (task, taskId) => {
  try {
    if (!task) {
      throw new Error(`The task with id: ${taskId} is not found`)}
  } catch (err) {
    // temporary return will be replaced to a logger
    return task;
  }
  return task;
};

export const getAllTasksDB = async (boardId) => {
  const tasks = await getAll(ENTITY_NAME);
  return boardId ? tasks.filter(task => task.boardId === boardId) : tasks;
};

export const getTaskDB = async ({id}) => {
  const task = await get(ENTITY_NAME, id);

  return checkExistentTask(task, id);
};

export const createTaskDB = async (task) => create(ENTITY_NAME, task);

export const updateTaskDB = async (task) => {
  const updatedTask = await update(ENTITY_NAME, task);

  return checkExistentTask(updatedTask, task.id);
};

export const removeTaskDB = async (id) => {
  const task = await remove(ENTITY_NAME, id);

  return checkExistentTask(task, id);
};
