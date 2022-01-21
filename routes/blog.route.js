const express = require('express')
const router = express.Router()

const blogController = require('../controllers/blog.controller')
router.get('/', blogController.getArticles)

router.get('/add-article', blogController.getAddArticles)

router.post('/add-article', blogController.postAddArticles)

router.get('/edit-article/:articleId', blogController.getEditArticles)

router.post('/edit-article', blogController.postEditArticles)

module.exports = router