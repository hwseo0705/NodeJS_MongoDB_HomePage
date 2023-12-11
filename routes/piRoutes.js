const express = require('express');
const router = express.Router();
const piController = require('../controllers/piController');

// Initial DB Save
// router.get('/add-eduExp', piController.pi_add_eduExp);
// router.get('/add-awards', piController.pi_add_awards);

router.get('/pi', piController.pi_index);

router.get('/pi/eduExp/write', piController.pi_eduExp_write_get);
router.post('/pi/eduExp/write', piController.pi_eduExp_write_post);
router.get('/pi/eduExp/modify', piController.pi_eduExp_modify_get);
router.put('/pi/eduExp/modify', piController.pi_eduExp_modify_post);
router.get('/pi/eduExp/delete', piController.pi_eduExp_delete);

router.get('/pi/awards/write', piController.pi_awards_write_get);
router.post('/pi/awards/write', piController.pi_awards_write_post);
router.get('/pi/awards/modify', piController.pi_awards_modify_get);
router.put('/pi/awards/modify', piController.pi_awards_modify_post);
router.get('/pi/awards/delete', piController.pi_awards_delete);

module.exports = router;