const {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
} = require('../models/OrderDetail');

const getAllOrderDetail = (req, res) => {
  readOrderDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};

const getOrderDetailById = (req, res) => {
  const id = req.params.id;
  readOrderDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};

const postOrderDetail = (req, res) => {
  const data = req.body;
  createOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail created !' });
    }
  });
};

const patchOrderDetail = (req, res) => {
  const data = req.body;
  updateOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail updated !' });
    }
  });
};

const deleteOrderDetail = (req, res) => {
  const id = req.params.id;
  removeOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail deleted!' });
    }
  });
};

module.exports = {
  getAllOrderDetail,
  getOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
};
