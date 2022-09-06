const {
  readProductimage,
  readProductimageById,
  createProductimage,
  updateProductimage,
  removeProductimage,
} = require('../models/productImage');
      
const getAllproductImage = (req, res) => {
  readProductimage((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};
      
const getproductImageById = (req, res) => {
  const id = req.params.id;
  readProductimageById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};
      
const postproductImage = (req, res) => {
  const data = req.body;
  createProductimage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productImage created !' });
    }
  });
};
      
const patchproductImage = (req, res) => {
  const data = req.body;
  updateProductimage(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productImage updated !' });
    }
  });
};
      
const deleteproductImage = (req, res) => {
  const id = req.params.id;
  removeProductimage(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'productImage deleted!' });
    }
  });
};
      
module.exports = {
  getAllproductImage,
  getproductImageById,
  postproductImage,
  patchproductImage,
  deleteproductImage,
};
      