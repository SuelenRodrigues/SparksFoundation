const Database = require('../db/config');

module.exports = {

    async create(req, res){
        const db = await Database();
        const sender = req.body.senderTransfer;
        const receiver = req.body.receiver;
        let amount = Number(req.body.amount); 
        const senderdb = await db.get(`SELECT * FROM customers WHERE name = "${sender}"`);
        let senderBalance =  Number(senderdb.balance);
        const receiverdb = await db.get(`SELECT * FROM customers WHERE name = "${receiver}"`);
        let receiverBalance =  Number(receiverdb.balance);
       
        console.log('Type of amount: ', typeof amount);
        senderBalance -= amount;
        
        receiverBalance += amount;
        

        await db.exec(`INSERT INTO transfers (
            sender,
            receiver,
            amount)
            VALUES("${sender}", "${receiver}", ${amount})
        `);

        await db.run(`UPDATE customers SET balance = ${senderBalance} WHERE name = "${sender}"`);
        await db.run(`UPDATE customers SET balance = ${receiverBalance} WHERE name = "${receiver}"`);
        

        res.redirect(`/customers`)
    },

    async open(req, res){
        const db = await Database();
        const transactionsdb = await db.all(`SELECT * FROM transfers`);
        console.log("tipo de todas as transactions", typeof transactionsdb)

        res.render("index", {page: "transactions", transactions:transactionsdb});
    },

    async openCustomer(req, res){
        console.log('Entrou no open Customer');
        const db = await Database();
        const customerName = req.params.customerName;
        const querydb = "SELECT * FROM transfers WHERE sender like " + customerName;
        console.log(typeof customerName);
        console.log(querydb);

        const transactionsCustomer = await db.all(querydb);
        console.log("tipo da transaction do customer", typeof transactionsCustomer);

        res.render("index", {page: "transactions", transactions:transactionsCustomer});

    },
}