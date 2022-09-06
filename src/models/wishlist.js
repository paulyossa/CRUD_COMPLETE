const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readwishlist= (callback) => {
  db.query('SELECT * FROM wishlist', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readwishlistById = (id, callback) => {
  db.query('SELECT * FROM wishlist WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createwishlist= (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `wishlist` (`id`, `customerId`,`productId`) VALUES (?,?,?)',
    [id, data.customerId, data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};


const removewishlist= (id, callback) => {
  db.query('DELETE FROM `wishlist` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readwishlist,
  readwishlistById,
  createwishlist,
  removewishlist,
};
