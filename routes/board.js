const express = require('express');

const Board = require('./../models/board');
const Order = require('./../models/order');

const multer = require('multer');
const cloudinary = require('cloudinary');
const multerStorageCloudinary = require('multer-storage-cloudinary');
const moment = require('moment');
const boardRouter = new express.Router();

const storage = new multerStorageCloudinary.CloudinaryStorage({
  cloudinary: cloudinary.v2
});
const upload = multer({ storage });

boardRouter.get('/booked/:id', (req, res, next) => {
  //we will get a board id from the body
  const boardId = req.params.id;
  //we will look in the orders model for that board id
  Order.find({ product: boardId })
    .then(orders => {
      //we will send back an object with an array of booked dates
      const booked = orders.reduce((acc, order) => {
        //get the start date, sum 1 day until I reach the end date
        const days = (order.endDate - order.startDate) / 1000 / 60 / 60 / 24;
        const range = [];
        for (let i = 0; i <= days; i++) {
          range.push(
            moment(order.startDate)
              .add(i, 'd')
              .toDate()
          );
        }
        return [...acc, ...range];
      }, []);
      res.json({ booked });
    })
    .catch(error => {
      next(error);
    });
});

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
    price: req.body.price,
    location: {
      coordinates: [req.body.longitude, req.body.latitude]
    }
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
