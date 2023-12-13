const express = require('express');
const router = express.Router();
const projectController = require("../controllers/projectController")

// router.get('/add-projects', projectController.add_project);
// router.get('/add-collaborator', projectController.add_collaborator);

router.get('/project', projectController.project_index);
router.get('/project/write', projectController.project_write_get);
router.post('/project/write', projectController.project_write_post);
router.get('/project/modify', projectController.project_modify_get);
router.put('/project/modify', projectController.project_modify_put);
router.get('/project/delete', projectController.project_delete);

router.get('/project/collab/write', projectController.project_collab_write_get);
router.post('/project/collab/write', projectController.project_collab_write_post);
router.get('/project/collab/modify', projectController.project_collab_modify_get);
router.put('/project/collab/modify', projectController.project_collab_modify_put);
router.get('/project/collab/delete', projectController.project_collab_delete);

module.exports = router;
