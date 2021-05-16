import { getAllUsersDB, getUserDB, createUserDB , updateUserDB, removeUserDB} from './user.memory.repository.mjs';

export const getAllUsers = () => getAllUsersDB();

export const getUser = (id) => getUserDB(id);

export const createUser = (id) => createUserDB(id);

export const updateUser = (id) => updateUserDB(id);

export const removeUser = (id) => removeUserDB(id);
