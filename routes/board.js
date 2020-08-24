const express = require('express');

const Board = require('./../models/board');

const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');

const boardRouter = new express.Router();

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});
const upload = multer({ storage });

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
    .populate('owner')
    .then(board => {
      res.json({ board });
    })
    .catch(error => {
      next(error);
    });
});

boardRouter.post('/', upload.single('picture'), (req, res, next) => {
  let url;
  if (req.file) {
    url = req.file.path;
  } else {
    url = '/logo.png';
  }
  Board.create({
    name: req.body.name,
    description: req.body.description,
    model: req.body.model,
    owner: req.user._id,
    picture: url,
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
