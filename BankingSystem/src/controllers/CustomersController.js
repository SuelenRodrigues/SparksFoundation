const Database = require("../db/config");

module.exports = {
    async open(req,res){
        const db = await Database();
        const customersdb = await db.all(`SELECT * FROM customers`);
        const customer = req.params.customer;

        res.render("index", {page: "customers", customers:customersdb, customer: customer});
    }
}