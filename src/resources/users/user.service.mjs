import { getAllUsersDB, getUserDB, createUserDB , updateUserDB, removeUserDB} from './user.memory.repository.mjs';
import { getAllTasksDB, updateTaskDB } from '../tasks/task.memory.repository.mjs';

export const getAllUsers = async () => getAllUsersDB();

export const getUser = async (id) => getUserDB(id);

export const createUser = async (id) => createUserDB(id);

export const updateUser = async (id) => updateUserDB(id);

export const removeUser = async (id) => {
  const allTasks = await getAllTasksDB();
  const currentUserTasks = allTasks.filter(task => task.userId === id);

  Promise.all(
    currentUserTasks.map(task => updateTaskDB({ ...task, userId: null }))
  ).catch(err => {
    throw new Error(`Error deleting user tasks: ${err}`);
  });

  return removeUserDB(id);
};
