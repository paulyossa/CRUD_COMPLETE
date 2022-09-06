const { Router } = require('express');
const {
  getAllproductDetail,
  getproductDetailById,
  postproductDetail,
  patchproductDetail,
  deleteproductDetail,
} = require('../controller/productDetail');

const router = Router();

router.get('/', getAllproductDetail);
router.get('/:id', getproductDetailById);
router.post('/', postproductDetail);
router.patch('/', patchproductDetail);
router.delete('/:id', deleteproductDetail);

module.exports = router;
