const {
  readOrder,
  readOrderById,
  createOrder,
  updateOrder,
  removeOrder,
} = require('../models/order');

const getAllOrder = (req, res) => {
  readOrder((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};

const getOrderById = (req, res) => {
  const id = req.params.id;
  readOrderById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};

const postOrder = (req, res) => {
  const data = req.body;
  createOrder(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'order created !' });
    }
  });
};

const patchOrder = (req, res) => {
  const data = req.body;
  updateOrder(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'order updated !' });
    }
  });
};

const deleteOrder = (req, res) => {
  const id = req.params.id;
  removeOrder(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'order deleted!' });
    }
  });
};

module.exports = {
  getAllOrder,
  getOrderById,
  postOrder,
  patchOrder,
  deleteOrder,
};
