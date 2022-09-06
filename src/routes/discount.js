const { Router } = require('express');
const {
  getAlldiscount,
  getdiscountById,
  postdiscount,
  patchdiscount,
  deletediscount,
} = require('../controller/discount');

const router = Router();

router.get('/', getAlldiscount);
router.get('/:id', getdiscountById);
router.post('/', postdiscount);
router.patch('/', patchdiscount);
router.delete('/:id', deletediscount);

module.exports = router;
