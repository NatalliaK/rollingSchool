import {v4 as uuid} from 'uuid';

export class Board {
  constructor({
                id = uuid(),
                title = 'Board_Title',
                columns = [
                  {
                    id: uuid(),
                    title: 'Title_Column',
                    order: 0
                  }
                ]
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}
