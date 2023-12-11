const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projectController")

// router.get('/add-ongoing', projectController.add_ongoing);
// router.get('/add-researchExp', projectController.add_research);
// router.get('/add-collaborator', projectController.add_collaborator);

router.get('/project/ongoing', projectController.project_ongoing);
router.get('/project/ongoing/write', projectController.project_ongoing_write_get);
router.post('/project/ongoing/write', projectController.project_ongoing_write_post);
router.get('/project/ongoing/modify', projectController.project_ongoing_modify_get);
router.put('/project/ongoing/modify', projectController.project_ongoing_modify_put);
router.get('/project/ongoing/delete', projectController.project_ongoing_delete);

router.get('/project/research', projectController.project_research_experience);
router.get('/project/research/write', projectController.project_research_write_get);
router.post('/project/research/write', projectController.project_research_write_post);
router.get('/project/research/modify', projectController.project_research_modify_get);
router.put('/project/research/modify', projectController.project_research_modify_put);
router.get('/project/research/delete', projectController.project_research_delete);

router.get('/project/collab', projectController.project_collaborators);
router.get('/project/collab/write', projectController.project_collab_write_get);
router.post('/project/collab/write', projectController.project_collab_write_post);
router.get('/project/collab/modify', projectController.project_collab_modify_get);
router.put('/project/collab/modify', projectController.project_collab_modify_put);
router.get('/project/collab/delete', projectController.project_collab_delete);

module.exports = router;
