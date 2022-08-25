const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrderDetail= (callback) => {
  db.query('SELECT * FROM order_detail', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderDetailById = (id, callback) => {
  db.query('SELECT * FROM order_detail WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createOrderDetail= (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `order_detail` (`id`, `name`, `quantity` , `price`, `orderId`) VALUES (?,?,?,?,?)',
    [
      id,
      data.name,
      data.quantity,
      data.price,
      data.orderId,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateOrderDetail= (data, callback) => {
  db.query(
    'UPDATE `order_detail` SET `name`=?, `quantity`=?, `price`=? WHERE `id`=?',
    [data.name, data.quantity, data.price,data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrderDetail= (id, callback) => {
  db.query('DELETE FROM `order_detail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
};
