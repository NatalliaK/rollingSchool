import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { USERS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = USERS;

const getErrorMessageForNonexistentUser = (userId) => {
  throw new Error(`The user with  id: ${userId} is not found`);
};

export const getAllUsersDB = async () => getAll(ENTITY_NAME);

export const getUserDB = async (userId) => {
  const user = await get(ENTITY_NAME, userId);

  if (!user) {
    getErrorMessageForNonexistentUser();
  }
  return user;
};

export const createUserDB = async (userId) => create(ENTITY_NAME, userId);

export const updateUserDB = async (userId) => {
  const user = await update(ENTITY_NAME, userId);

  if (!user) {
    getErrorMessageForNonexistentUser();
  }
  return user;
};

export const removeUserDB = async (userId) => {
  const user = await remove(ENTITY_NAME, userId);

  if (!user) {
    getErrorMessageForNonexistentUser();
  }

  return user;
};
