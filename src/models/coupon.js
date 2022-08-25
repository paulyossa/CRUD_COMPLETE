const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readCoupon = (callback) => {
  db.query('SELECT * FROM coupon', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCouponById = (id, callback) => {
  db.query('SELECT * FROM coupon WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCoupon = (data, callback) => {
  const id = uuidv4();
  db.query(
    `INSERT INTO coupon (id, status, amount, count, CreateAt, UpdateAt, code, expiredAt, customerId) 
    VALUES (?,?,?,?,?,?,?,?,?)`,
    [
      id,
      data.status || 'INACTIVE',
      data.amount,
      data.count,
      new Date(),
      new Date(),
      data.code,
      new Date(),
      data.customerId,
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

const updateCoupon = (data, callback) => {
  db.query(
    'UPDATE `coupon` SET `status`=?, `amount`=?, `count`=?, `UpdateAt`=?,`expiredAt`=? WHERE id=?',
    [data.status, data.amount, data.count, new Date(), new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCoupon = (id, callback) => {
  db.query('DELETE FROM coupon WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
};
