const {
  readwishlist,
  readwishlistById,
  createwishlist,
  removewishlist,
} = require('../models/wishlist');
        
const getAllwishlist = (req, res) => {
  readwishlist((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, orders: result });
  });
};
        
const getwishlistById = (req, res) => {
  const id = req.params.id;
  readwishlistById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, order: result[0] });
  });
};
        
const postwishlist = (req, res) => {
  const data = req.body;
  createwishlist(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'wishlist created !' });
    }
  });
};
        
      
const deletewishlist = (req, res) => {
  const id = req.params.id;
  removewishlist(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'wishlist deleted!' });
    }
  });
};
        
module.exports = {
  getAllwishlist,
  getwishlistById,
  postwishlist,
  deletewishlist,
};
        