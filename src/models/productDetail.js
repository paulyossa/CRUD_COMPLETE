const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductDetail= (callback) => {
  db.query('SELECT * FROM product_detail', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductDetailById = (id, callback) => {
  db.query('SELECT * FROM product_detail WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductDetail= (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `product_detail` (`id`, `size`, `color` , `age`,`brand`,`gender`,`productId`) VALUES (?,?,?,?,?,?,?)',
    [id, data.size ||'M', data.color,data.age,data.brand,data.gender || 'M', data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductDetail= (data, callback) => {
  db.query(
    'UPDATE `product_detail` SET `size`=?, `color`=?,`age`=?,`brand`=?,`gender`=? WHERE `id`=?',
    [data.size, data.color,data.age,data.brand,data.gender, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductDetail= (id, callback) => {
  db.query('DELETE FROM `product_detail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
};
