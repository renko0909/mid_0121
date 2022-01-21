const db = require('../util/database')
// const mongodb = require('mongodb')
// const getDB = require('../util/db-mongo').getDB

module.exports = class Articles {
    constructor(id, title, content){
        this.id = id
        this.title = title
        this.content = content
    }
    save(){
        return db.execute('INSERT INTO articles (title, content) VALUES (?, ?)', [this.title, this.content])
    }

    edit(){
        return db.execute('UPDATE articles SET title=?, content=? WHERE id = ?', [this.title, this.content])
    }

    static deleteById(id){
        // return db.execute('DELETE FROM products WHERE products.id = ?', [id])
        const db = getDB()
        const objectId = new mongodb.ObjectId(id)
        return db.collection('articles').deleteOne({ _id: objectId })
    }

    //fetch all products
    static fetchAll(){
        return db.execute('SELECT * FROM articles')
    }

    static findById(id) {
        return db.execute('SELECT * FROM articles WHERE articles.id = ?', [id])
    }

    static fetchAll(){
        return db.execute('SELECT * FROM articles')
    }
}
//     save(){
        

//         const db = getDB()
//         return db.collection('articles').insertOne(this)
//     }

//     edit(id){
        
//         const db = getDB()
//         const objectId = new mongodb.ObjectId(id)
//         return db.collection('articles').updateOne({ _id: objectId }, {$set: this })
//     }

//     static deleteById(id){
        
//         const db = getDB()
//         const objectId = new mongodb.ObjectId(id)
//         return db.collection('articles').deleteOne({ _id: objectId })
//     }

//     //fetch all products
//     static fetchAll(){
        
//         const db = getDB()
//         return db.collection('articles').find().toArray()     
//     }

//     static findById(id) {
        
//         const db = getDB()
//         const objectId = new mongodb.ObjectId(id)
//         return db.collection('articles').find({ _id: objectId }).next()
//     }
// }
