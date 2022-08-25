const { Router } = require('express');
const {
  getAllOrderDetail,
  getOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
} = require('../controller/OrderDetail');

const router = Router();

router.get('/', getAllOrderDetail);
router.get('/:id', getOrderDetailById);
router.post('/', postOrderDetail);
router.patch('/', patchOrderDetail);
router.delete('/:id', deleteOrderDetail);

module.exports = router;
