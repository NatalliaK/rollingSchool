import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { TASKS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = TASKS;

const getErrorMessageForNonexistentTask = (taskId) => {
  throw new Error(`The user with  id: ${taskId} is not found`);
};

export const getAllTasksDB = async () => getAll(ENTITY_NAME);

export const getTaskDB = async (taskId) => {
  const task = await get(ENTITY_NAME, taskId);

  if (!task) {
    getErrorMessageForNonexistentTask();
  }
  return task;
};

export const createTaskDB = async (taskId) => create(ENTITY_NAME, taskId);

export const updateTaskDB = async (taskId) => {
  const task = await update(ENTITY_NAME, taskId);

  if (!task) {
    getErrorMessageForNonexistentTask();
  }
  return task;
};

export const removeTaskDB = async (taskId) => {
  const task = await remove(ENTITY_NAME, taskId);

  if (!task) {
    getErrorMessageForNonexistentTask();
  }

  return task;
};
