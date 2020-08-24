// Create route handler for sending an order to the database
const express = require('express');
const Order = require('./../models/order');
const orderRouter = new express.Router();

orderRouter.post('/', (req, res, next) => {
  const { product, user, startDate, endDate } = req.body;
  // Order.find()
  //   .then(order => {
  //     console.log(order);
  //     res.json({ order });
  //   })
  //   .catch(error => {
  //     next(error);
  //   });
  Order.create({ product, user, startDate, endDate, paid: false })
    .then(newOrder => {
      res.json({ newOrder });
    })
    .catch(error => {
      next(error);
    });
});

// orderRouter.delete('/:id', (req, res, next) => {
//   const id = req.params.id;
//   Order.findByIdAndDelete(id)
//     .then(() => {
//       res.json({});
//     })
//     .catch(error => {
//       next(error);
//     });
// });

module.exports = orderRouter;
