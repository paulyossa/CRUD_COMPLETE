const { Router } = require('express');
const {
  getAllCoupon,
  getCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
} = require('../controller/coupon');

const router = Router();

router.get('/', getAllCoupon);
router.get('/:id', getCouponById);
router.post('/', postCoupon);
router.patch('/', patchCoupon);
router.delete('/:id', deleteCoupon);

module.exports = router;
