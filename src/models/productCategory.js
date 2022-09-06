const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readproductCategory = (callback) => {
  db.query('SELECT * FROM productCategory', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readproductCategoryById = (id, callback) => {
  db.query('SELECT * FROM productCategory WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createproductCategory = (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `productCategory` (`id`, `name`, `desc` , `image`, `CreatedAt`,`UpdatedAt`) VALUES (?,?,?,?,?,?)',
    [id, data.name, data.desc, data.image, new Date(), new Date()],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateproductCategory = (data, callback) => {
  db.query(
    'UPDATE `productCategory` SET `name`=?, `desc`=?, `image`=?,`UpdatedAt`=? WHERE `id`=?',
    [data.name, data.desc, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeproductCategory = (id, callback) => {
  db.query('DELETE FROM `productCategory` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readproductCategory,
  readproductCategoryById,
  createproductCategory,
  updateproductCategory,
  removeproductCategory,
};
