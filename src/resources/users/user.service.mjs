import { getAllUsersDB, getUserDB, createUserDB , updateUserDB, removeUserDB} from './user.memory.repository.mjs';

export const getAllUsers = async () => getAllUsersDB();

export const getUser = async (id) => getUserDB(id);

export const createUser = async (id) => createUserDB(id);

export const updateUser = async (id) => updateUserDB(id);

export const removeUser = async (id) => removeUserDB(id);
