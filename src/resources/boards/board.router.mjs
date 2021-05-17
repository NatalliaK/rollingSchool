import { Router } from 'express';
import { createBoard, getAllBoards, getBoard, removeBoard, updateBoard } from './board.service.mjs';
import { Board } from './board.model.mjs';

export const boardRouter = Router();

boardRouter.route('/').get(async (req, res) => {
  const boards = await getAllBoards();
  if (boards) {
    res.status(200).json(boards.map(Board.toResponse));
  } else {
    res.status(404).send('Boards not found');
  }
});

boardRouter.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const board = await createBoard(new Board({ title, columns }));

  if (board) {
    res.status(201).json(Board.toResponse(board));
  } else {
    res.status(404).send('Board not created');
  }
});

boardRouter.route('/:id').get(async (req, res) => {
  const board = await getBoard(req.params.id);

  if (board) {
    res.status(200).json(Board.toResponse(board));
  } else {
    res.status(404).send('Board not found');
  }
});

boardRouter.route('/:id').put(async (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  const board = await updateBoard({ id, ...body });

  if (board) {
    res.status(200).json(Board.toResponse(board));
  } else {
    res.status(404).send('Board not updated');
  }
});

boardRouter.route('/:id').delete(async (req, res) => {
  const board = await removeBoard(req.params.id);

  if (board) {
    res.status(204).json(Board.toResponse(board));
  } else {
    res.status(404).send('Board not removed');
  }
});
