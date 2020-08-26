// Create route handler for sending an order to the database
const express = require('express');
const Order = require('./../models/order');
const Board = require('./../models/board');
const orderRouter = new express.Router();

orderRouter.post('/', (req, res, next) => {
  const { product, user, startDate, endDate } = req.body;

  const ONE_DAY = 1000 * 60 * 60 * 24;
  const start = Date.parse(startDate);
  const end = Date.parse(endDate);
  const differenceMs = Math.abs(end - start);
  const days = Math.round(differenceMs / ONE_DAY) + 1;

  let total;

  Board.findById(product)
    .then(data => {
      const amount = data.price.amount * days;
      const currency = 'EUR';
      total = {
        amount,
        currency
      };
      return Order.create({ product, user, startDate, endDate, days, total });
    })
    .then(newOrder => {
      res.json({ newOrder });
    })
    .catch(error => {
      next(error);
    });
});

// orderRouter.post('/', async (req, res, next) => {
//   try {
//     const { product, user, startDate, endDate } = req.body;

//     const ONE_DAY = 1000 * 60 * 60 * 24;
//     const start = Date.parse(startDate);
//     const end = Date.parse(endDate);
//     const differenceMs = Math.abs(end - start);
//     const days = Math.round(differenceMs / ONE_DAY) + 1;

//     const productInfo = await Board.findById(product);
//     const total = {
//       amount: parseInt(productInfo.price) * days,
//       currency: 'EUR'
//     };
//     const newOrder = await Order.create({
//       product,
//       user,
//       startDate,
//       endDate,
//       days,
//       total
//     });
//     res.json(newOrder);
//   } catch (error) {
//     next(error);
//   }
// });

orderRouter.get('/list', (req, res, next) => {
  Order.find()
    .populate('product')
    .populate('user')
    .populate('owner')
    .then(orders => {
      console.log('hello');
      console.log(orders);
      res.json({ orders });
    })
    .catch(error => {
      next(error);
    });

  orderRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findById(id)
      .populate('product')
      .populate('user')
      .then(order => {
        res.json({ order });
      })
      .catch(error => {
        next(error);
      });
  });

  orderRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    Order.findByIdAndDelete(id)
      .then(() => {
        res.json({});
      })
      .catch(error => {
        next(error);
      });
  });
});

module.exports = orderRouter;
