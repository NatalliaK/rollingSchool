import { getAllBoardsDB, getBoardDB, createBoardDB, updateBoardDB, removeBoardDB } from './board.memory.repository.mjs';
import { getAllTasksDB, removeTaskDB } from '../tasks/task.memory.repository.mjs';

export const getAllBoards = async () => getAllBoardsDB();

export const getBoard = async (id) => getBoardDB(id);

export const createBoard = async (board) => createBoardDB(board);

export const updateBoard = async (board) => updateBoardDB(board);

export const removeBoard = async (id) => {
  const allTasks = await getAllTasksDB();
  const currentBoardTasks = allTasks.filter(task => task.boardId === id);

  Promise.all(
    currentBoardTasks.map(task => removeTaskDB(task.id))
  ).catch(err => {
    throw new Error(`Error delete board's task: ${err}`)
  });

  return removeBoardDB(id);
};
