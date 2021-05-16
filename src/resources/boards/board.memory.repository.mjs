import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { TASKS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = TASKS;

const getErrorMessageForNonexistentBoard = (boardId) => {
  throw new Error(`The user with  id: ${boardId} is not found`);
};

export const getAllBoardsDB = async () => getAll(ENTITY_NAME);

export const getBoardDB = async (boardId) => {
  const board = await get(ENTITY_NAME, boardId);

  if (!board) {
    getErrorMessageForNonexistentBoard();
  }
  return board;
};

export const createBoardDB = async (boardId) => create(ENTITY_NAME, boardId);

export const updateBoardDB = async (boardId) => {
  const board = await update(ENTITY_NAME, boardId);

  if (!board) {
    getErrorMessageForNonexistentBoard();
  }
  return board;
};

export const removeBoardDB = async (boardId) => {
  const board = await remove(ENTITY_NAME, boardId);

  if (!board) {
    getErrorMessageForNonexistentBoard();
  }

  return board;
};
