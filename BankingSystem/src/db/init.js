const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()
        const name = 'Carol Smith';
        const email = 'smithrol@uol.com';
        const balance = 2454;

      /* await db.exec(`CREATE TABLE customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            balance INTEGER
        )`);*/

        await db.exec(`CREATE TABLE transfers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sender TEXT,
            receiver TEXT,
            amount INTEGER
        )`);

        /* await db.exec(`INSERT INTO customers (
            name,
            email,
            balance)
            VALUES("${name}", "${email}", ${balance})
        `);*/

        await db.close()
    }
}

initDb.init();