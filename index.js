const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");

const commentsRoutes = require('./routes/comments')
const contactsRoutes = require('./routes/contacts')
const productsRoutes = require('./routes/products')
const vehiclesRoutes = require('./routes/vehicles')

const app = express();

const port = process.env.PORT || 4001;

//code here
app.use(express.static('public'))
app.use(bodyParser.json())

app.use(commentsRoutes);
app.use(contactsRoutes);
app.use(productsRoutes);
app.use(vehiclesRoutes);



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
