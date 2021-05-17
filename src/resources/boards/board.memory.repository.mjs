import { getAll, get, create, remove, update } from '../../db/temporaryDB.mjs';
import { BOARDS } from '../../constants/appConstants.mjs';

const ENTITY_NAME = BOARDS;

const checkExistentBoard = (board, boardId) => {
  try {
    if (!board) {
      throw new Error(`The board with id: ${boardId} is not found`);
    }
  } catch (err) {
    // temporary return will be replaced to a logger
    return board;
  }
  return board;
};

export const getAllBoardsDB = async () => getAll(ENTITY_NAME);

export const getBoardDB = async (boardId) => {
  const board = await get(ENTITY_NAME, boardId);

  return checkExistentBoard(board, boardId);
};

export const createBoardDB = async (board) => create(ENTITY_NAME, board);

export const updateBoardDB = async (board) => {
  const updatedBoard = await update(ENTITY_NAME, board);

  return checkExistentBoard(updatedBoard, board.id);
};

export const removeBoardDB = async (boardId) => {
  const board = await remove(ENTITY_NAME, boardId);

  return checkExistentBoard(board, boardId);
};
