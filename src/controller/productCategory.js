const {
  readproductCategory,
  readproductCategoryById,
  createproductCategory,
  updateproductCategory,
  removeproductCategory,
} = require('../models/productCategory');

const getAllproductCategory = (req, res) => {
  readproductCategory((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};

const getproductCategoryById = (req, res) => {
  const id = req.params.id;
  readproductCategoryById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};

const postproductCategory = (req, res) => {
  const data = req.body;
  createproductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productCategory created !' });
    }
  });
};

const patchproductCategory = (req, res) => {
  const data = req.body;
  updateproductCategory(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productCategory updated !' });
    }
  });
};

const deleteproductCategory = (req, res) => {
  const id = req.params.id;
  removeproductCategory(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productCategory deleted!' });
    }
  });
};

module.exports = {
  getAllproductCategory,
  getproductCategoryById,
  postproductCategory,
  patchproductCategory,
  deleteproductCategory,
};
