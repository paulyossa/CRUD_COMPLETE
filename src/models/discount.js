const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readDiscount = (callback) => {
  db.query('SELECT * FROM discount', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readDiscountById = (id, callback) => {
  db.query('SELECT * FROM discount WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createDiscount = (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `discount` (`id`, `name`, `desc` , `createAt`,`UpdateAt`,`image`,`amount`) VALUES (?,?,?,?,?,?,?)',
    [id, data.name, data.desc, new Date(), new Date(), data.image, data.amount],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateDiscount = (data, callback) => {
  db.query(
    'UPDATE `discount` SET `name`=?, `desc`=?,`UpdatedAt`=?,, `image`=? WHERE `id`=?',
    [data.name, data.desc, new Date(), data.image, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeDiscount = (id, callback) => {
  db.query('DELETE FROM `discount` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readDiscount,
  readDiscountById,
  createDiscount,
  updateDiscount,
  removeDiscount,
};
