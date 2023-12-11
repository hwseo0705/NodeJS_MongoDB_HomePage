const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Initial DB Save
// router.get('/add-news', newsController.news_add);

router.get('/news', newsController.news_index);

router.get('/news/detail', newsController.news_detail);

router.get('/news/write', newsController.news_write_get);

router.post('/news/write', newsController.news_write_post);

router.get('/news/modify', newsController.news_modify_get);

router.put('/news/modify', newsController.news_modify_post);

router.get('/news/delete', newsController.news_delete);

module.exports = router;