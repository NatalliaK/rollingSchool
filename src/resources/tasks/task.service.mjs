import { getAllTasksDB, getTaskDB, createTaskDB, updateTaskDB, removeTaskDB } from './task.memory.repository.mjs';

export const getAllTasks = async () => getAllTasksDB();

export const getTask = async (id) => getTaskDB(id);

export const createTask = async (id) => createTaskDB(id);

export const updateTask = async (id) => updateTaskDB(id);

export const removeTask = async (id) => removeTaskDB(id);
