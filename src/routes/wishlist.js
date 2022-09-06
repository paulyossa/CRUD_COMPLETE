const { Router } = require('express');
const {
  getAllwishlist,
  getwishlistById,
  postwishlist,
  deletewishlist,
} = require('../controller/wishlist');

const router = Router();

router.get('/', getAllwishlist);
router.get('/:id', getwishlistById);
router.post('/', postwishlist);
router.delete('/:id', deletewishlist);

module.exports = router;
