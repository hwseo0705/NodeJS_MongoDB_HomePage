const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');

// router.get('/add-photos', photoController.photo_add);

router.get('/photo', photoController.photo_index);
router.post('/photo/write', photoController.photo_write_post);
router.get('/photo/delete', photoController.photo_delete);

module.exports = router;