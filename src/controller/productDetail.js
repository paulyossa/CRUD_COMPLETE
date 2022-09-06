const {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
} = require('../models/productDetail');
    
const getAllproductDetail = (req, res) => {
  readProductDetail((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};
    
const getproductDetailById = (req, res) => {
  const id = req.params.id;
  readProductDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};
    
const postproductDetail = (req, res) => {
  const data = req.body;
  createProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productDetail created !' });
    }
  });
};
    
const patchproductDetail = (req, res) => {
  const data = req.body;
  updateProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productDetail updated !' });
    }
  });
};
    
const deleteproductDetail = (req, res) => {
  const id = req.params.id;
  removeProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productDetail deleted!' });
    }
  });
};
    
module.exports = {
  getAllproductDetail,
  getproductDetailById,
  postproductDetail,
  patchproductDetail,
  deleteproductDetail,
};
    