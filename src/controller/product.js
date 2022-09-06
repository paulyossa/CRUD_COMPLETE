const {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
} = require('../models/product');
  
const getAllproduct = (req, res) => {
  readProduct((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};
  
const getproductById = (req, res) => {
  const id = req.params.id;
  readProductById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};
  
const postproduct = (req, res) => {
  const data = req.body;
  createProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'product created !' });
    }
  });
};
  
const patchproduct = (req, res) => {
  const data = req.body;
  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'product updated !' });
    }
  });
};
  
const deleteproduct = (req, res) => {
  const id = req.params.id;
  removeProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'product deleted!' });
    }
  });
};
  
module.exports = {
  getAllproduct,
  getproductById,
  postproduct,
  patchproduct,
  deleteproduct,
};
  