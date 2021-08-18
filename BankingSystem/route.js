const express = require('express');
const TransactionController = require('./src/controllers/TransactionController');
const CustomersController = require('./src/controllers/CustomersController');

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'home'})) //req - requisicao, res - resposta
route.get('/customers', CustomersController.open)
route.get('/customers/:customer', CustomersController.open)
route.get('/customer/:customerName', TransactionController.openCustomer)
route.get('/transactions', TransactionController.open)

route.post('/customers/create', TransactionController.create)


module.exports = route