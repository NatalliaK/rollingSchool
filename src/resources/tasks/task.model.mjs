import * as uuid from 'uuid';

export class Task {
  constructor({
                id = uuid(),
                title = 'Task_Title',
                order = 0,
                description = 'Task_Description',
                userId = null,
                boardId = null,
                columnId = null
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, boardId, userId, columnId } = task;
    return { id, title, order, description, boardId, userId, columnId };
  }
}
