const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

// router.get('/add-members', membersController.members_add);
// router.get('/add-alumni',  membersController.members_add_alumni);

router.get('/member', membersController.members_index);
router.get('/alumni', membersController.members_alumni_index);

router.get('/member/write', membersController.members_write_get);
router.post('/member/write', membersController.members_write_post);

router.get('/member/modify', membersController.members_modify_get);
router.put('/member/modify', membersController.members_modify_put);

router.get('/member/delete', membersController.members_delete);

module.exports = router;
