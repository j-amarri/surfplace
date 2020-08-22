const express = require('express');

const Board = require('./../models/board');
const boardRouter = new express.Router();

boardRouter.get('/list', (req, res, next) => {
  Board.find()
    .then(boards => {
      res.json({ boards });
    })
    .catch(error => {
      next(error);
    });
});

boardRouter.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Board.findById(id)
    .then(board => {
      res.json({ board });
    })
    .catch(error => {
      next(error);
    });
});

boardRouter.post('/', (req, res, next) => {
  console.log(req.body);
  Board.create({
    name: req.body.name,
    description: req.body.description,
    model: req.body.model,
    size: req.body.size,
    level: req.body.level,
    price: req.body.price
  })
    .then(board => res.json({ board }))
    .catch(error => {
      console.log(error);
      next(error);
    });
});

boardRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Board.findByIdAndDelete(id)
    .then(() => {
      res.json({});
    })
    .catch(error => {
      next(error);
    });
});

boardRouter.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  Board.findByIdAndUpdate(id, {
    name: req.body.name
  })
    .then(board => res.json({ board }))
    .catch(error => {
      next(error);
    });
});

module.exports = boardRouter;
