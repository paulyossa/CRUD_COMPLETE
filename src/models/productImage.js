const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductimage= (callback) => {
  db.query('SELECT * FROM productimage', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductimageById = (id, callback) => {
  db.query('SELECT * FROM productimage WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createProductimage= (data, callback) => {
  const id = uuidv4();
  db.query(
    ' INSERT INTO `productimage` (`id`, `url`, `createdAt` , `updatedAt`,`productId`) VALUES (?,?,?,?,?)',
    [id, data.url, new Date(),new Date(),data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductimage= (data, callback) => {
  db.query(
    'UPDATE `productimage` SET `url`=?, `updatedAt`=? WHERE `id`=?',
    [data.url,new Date(),data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductimage= (id, callback) => {
  db.query('DELETE FROM `productimage` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductimage,
  readProductimageById,
  createProductimage,
  updateProductimage,
  removeProductimage,
};
