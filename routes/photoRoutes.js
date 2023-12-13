const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

// router.get('/add-photos', photoController.photo_add);

router.get('/photo', photoController.photo_index);
router.get('/photo/detail', photoController.photo_detail);
router.get('/photo/write', photoController.photo_write_get);
router.post('/photo/write', photoController.photo_write_post);
router.get('/photo/modify', photoController.photo_modify_get);
router.put('/photo/modify', photoController.photo_modify_put);
router.get('/photo/delete', photoController.photo_delete);

module.exports = router;