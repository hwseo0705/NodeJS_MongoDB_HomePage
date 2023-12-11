const express = require('express');
const router = express.Router();
const researchController = require("../controllers/researchController");

// router.get('/add-research', researchController.research_add);

router.get('/research', researchController.research_index);
router.get('/research/detail', researchController.research_detail);

router.get('/research/write', researchController.research_write_get);
router.post('/research/write', researchController.research_write_post);

router.get('/research/modify', researchController.research_modify_get);
router.put('/research/modify/', researchController.research_modify_put);

router.get('/research/delete', researchController.research_delete);


module.exports = router;
