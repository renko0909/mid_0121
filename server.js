const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require("mongoose");

const blogRoute = require('./routes/blog.route')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:false}))
// app.use('/public', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(blogRoute)

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  
  mongoose.connect(
    'mongodb+srv://airen:1234@cluster0.mmknz.mongodb.net/'
  );
  
  const db = mongoose.connection;


db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", () => console.log("DB connection successful"));

const PORT = process.env.PORT || 3000
app.listen(PORT)
