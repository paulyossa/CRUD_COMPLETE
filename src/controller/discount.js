const {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
} = require('../models/discount');

const getAlldiscount = (req, res) => {
  readDiscount((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};

const getdiscountById = (req, res) => {
  const id = req.params.id;
  readDiscountById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};

const postdiscount = (req, res) => {
  const data = req.body;
  createDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'discount created !' });
    }
  });
};

const patchdiscount = (req, res) => {
  const data = req.body;
  updateDiscount(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'discount updated !' });
    }
  });
};

const deletediscount = (req, res) => {
  const id = req.params.id;
  removeDiscount(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'discount deleted!' });
    }
  });
};

module.exports = {
  getAlldiscount,
  getdiscountById,
  postdiscount,
  patchdiscount,
  deletediscount,
};
