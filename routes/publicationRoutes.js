const express = require('express');
const router = express.Router();
const publicationController =require('../controllers/publicationController');

// router.get('/add-publications', publicationController.publication_add);
// router.get('/add-patents', publicationController.patent_add);

router.get('/publication', publicationController.publication_index);
router.get('/patent', publicationController.patent_index);

router.get('/publication/write', publicationController.publication_write_get);
router.post('/publication/write', publicationController.publication_write_post);
router.get('/publication/modify', publicationController.publication_modify_get);
router.put('/publication/modify', publicationController.publication_modify_put);
router.get('/publication/delete', publicationController.publication_delete);

module.exports = router;
