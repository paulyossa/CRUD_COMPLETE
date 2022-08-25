const express = require('express');
const app = express();
const env = require('./config/env');
const dbConnection = require('./config/db');

const customerRoutes = require('./src/routes/customer');
const couponRoutes = require('./src/routes/coupon');
const orderRoutes = require('./src/routes/order');
const OrderDetailRoutes = require('./src/routes/OrderDetail');
const productCategoryRoutes = require('./src/routes/productCategory');

dbConnection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('db connected!');
});

app.use(express.json());

app.use('/api/customer', customerRoutes);
app.use('/api/coupon', couponRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/OrderDetail', OrderDetailRoutes);
app.use('/api/productCategory', productCategoryRoutes);

app.listen(env.port || 3000, () => {
  console.log(`Server up and running on port ${env.port}`);
});
