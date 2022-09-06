const { Router } = require('express');
const {
  getAllproductImage,
  getproductImageById,
  postproductImage,
  patchproductImage,
  deleteproductImage,
} = require('../controller/productImage');

const router = Router();

router.get('/', getAllproductImage);
router.get('/:id', getproductImageById);
router.post('/', postproductImage);
router.patch('/', patchproductImage);
router.delete('/:id', deleteproductImage);

module.exports = router;
