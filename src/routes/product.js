const { Router } = require('express');
const {
  getAllproduct,
  getproductById,
  postproduct,
  patchproduct,
  deleteproduct,
} = require('../controller/product');

const router = Router();

router.get('/', getAllproduct);
router.get('/:id', getproductById);
router.post('/', postproduct);
router.patch('/', patchproduct);
router.delete('/:id', deleteproduct);

module.exports = router;
