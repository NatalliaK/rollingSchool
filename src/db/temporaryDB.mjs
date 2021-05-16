import { USERS, BOARDS, TASKS } from '../constants/appConstants.mjs';
import { User } from '../resources/users/user.model.mjs';
import { Board } from '../resources/boards/board.model.mjs';
import { Task } from '../resources/tasks/task.model.mjs';

export const DB = {
  [USERS]: {},
  [BOARDS]: {},
  [TASKS]: {}
};

(() => {
  const usersDB = DB.USERS;
  const boardsDB = DB.BOARDS;
  const tasksDB = DB.TASKS;

  for (let i = 0; i <= 3; i++) {
    /* usersDB */
    const user = new User();
    usersDB[user.id] = { ...user };

    /* boardsDB */
    const board = new Board();
    boardsDB[board.id] = { ...board };

    /* tasksDB */
    const task = new Task(board.id);

    tasksDB[task.id] = { ...task };
  }
})();

export const getAll = async entityName => Object.values(DB[entityName]);

export const get = async (entityName, id) => DB[entityName][id];

export const create = async (entityName, entity) => {
  DB[entityName][entity.id] = entity;
  return entity;
};

export const update = async (entityName, entity) => {
  DB[entityName][entity.id] = entity;
  return entity;
};

export const remove = async (entityName, id) => {
  const entity = await get(entityName, id);

  if (entity) {
    delete DB[entityName][id];
  }
  return entity;
};
