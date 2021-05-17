import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { USERS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = USERS;

const checkExistentUser = (user, userId) => {
  try {
    if (!user) {
      throw new Error(`The user with  id: ${userId} is not found`);
    }
  } catch (err) {
    // temporary return will be replaced to a logger
    return user;
  }
  return user;
};

export const getAllUsersDB = async () => getAll(ENTITY_NAME);

export const getUserDB = async (userId) => {
  const user = await get(ENTITY_NAME, userId);

  return checkExistentUser(user, userId);
};

export const createUserDB = async (userId) => create(ENTITY_NAME, userId);

export const updateUserDB = async (user) => {
  const updatedUser = await update(ENTITY_NAME, user);

  return checkExistentUser(updatedUser, user.id);
};

export const removeUserDB = async (userId) => {
  const user = await remove(ENTITY_NAME, userId);

  return checkExistentUser(user, userId);
};
