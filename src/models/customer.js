const db = require('../../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCustomer = (data, callback) => {
  const id = uuidv4();
  db.query(
    `INSERT INTO customer (id, Firstname, LastName, email,phone, hash, image, status, 
      createdAt, updatedAt) VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [
      id,
      data.Firstname,
      data.LastName,
      data.email,
      data.phone,
      data.hash,
      data.image,
      data.status || 'INACTIVE',
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err && err.errno === 1062) {
        callback({ errcode: 'customer_exist' }, null);
        // console.log(err.errno);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateCustomer = (data, callback) => {
  db.query(
    `UPDATE customer SET Firstname=?, LastName=?,
     hash=?, image=?, updatedAt=? WHERE id=?`,
    [data.Firstname, data.LastName, data.hash, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCustomer = (id, callback) => {
  db.query('DELETE FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
};
