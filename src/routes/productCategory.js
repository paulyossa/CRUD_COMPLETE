const { Router } = require('express');
const {
  getAllproductCategory,
  getproductCategoryById,
  postproductCategory,
  patchproductCategory,
  deleteproductCategory,
} = require('../controller/productCategory');

const router = Router();

router.get('/', getAllproductCategory);
router.get('/:id', getproductCategoryById);
router.post('/', postproductCategory);
router.patch('/', patchproductCategory);
router.delete('/:id', deleteproductCategory);

module.exports = router;
