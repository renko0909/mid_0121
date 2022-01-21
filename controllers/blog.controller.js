const Article = require('../models/article.model')

exports.getArticles = (req, res, next) => {
    // console.log("helooooooo");
    Article.fetchAll().then(([rowData,fieldData] ) => {
        // console.log(rowData)

        res.render('blog/article-list', {  
            pageTitle: 'All articles',
            articles: rowData
        })

    }).catch(err => console.log(err))

} 

exports.getAddArticle = (req,res,next) => {
    res.render('blog/add-edit-article', {
        pageTitle: 'Add Content',
        editing: false
    })
}

exports.postAddArticle = (req,res,next) => {
    const { title, content} = req.body

    const article = new Article(null, title, content)
    article.save()
    res.redirect('/')
}

exports.getEditArticle = (req,res,next) => {
    const editMode = req.query.edit
    if(!editMode) res.redirect('/')

    const artclId = req.params.articleId
    Article.findById(artclId)
    .then(([rowData, fieldData]) => {
        console.log(rowData[0]);
        res.render('blog/add-edit-article', {
            pageTitle: 'Edit Article',
            editing: editMode,
            article: rowData[0]
        })
    })
    .catch(err => console.log(err))
}

exports.postEditArticle = (req,res,next) => {
    const {articleId, title, content} = req.body
    const updatedArticle = new Article(productId, title, content)
    updatedArticle.edit()
    res.redirect('/')
}
//==================================================== 
// Product.fetchAll().then((articles) => {

//     const tempArticles = articles.map(p => ({ ...p, description: `${p.description.slice(0, 25)}...` }))

//     res.render('blog/articles-list', {
//         pageTitle: 'All Articles',
//         articles: tempArticles
//     })


// }).catch(err => console.log(err))
//====================================================