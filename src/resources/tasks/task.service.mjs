import { getAllTasksDB, getTaskDB, createTaskDB, updateTaskDB, removeTaskDB } from './task.memory.repository.mjs';

export const getAllTasks = () => getAllTasksDB();

export const getTask = (id) => getTaskDB(id);

export const createTask = (id) => createTaskDB(id);

export const updateTask = (id) => updateTaskDB(id);

export const removeTask = (id) => removeTaskDB(id);
