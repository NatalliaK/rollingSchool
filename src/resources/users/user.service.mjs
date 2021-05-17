import { getAllUsersDB, getUserDB, createUserDB , updateUserDB, removeUserDB} from './user.memory.repository.mjs';
import { getAllTasksDB, updateTaskDB } from '../tasks/task.memory.repository.mjs';

export const getAllUsers = async () => getAllUsersDB();

export const getUser = async (id) => getUserDB(id);

export const createUser = async (user) => createUserDB(user);

export const updateUser = async (user) => updateUserDB(user);

export const removeUser = async (id) => {
  const allTasks = await getAllTasksDB();
  const currentUserTasks = allTasks.filter(task => task.userId === id);

  currentUserTasks.forEach(task => updateTaskDB({ ...task, userId: null }));

  return removeUserDB(id);
};
