const chalk = require('chalk');

const { log } = console;

class DatabaseService {
    save(email, price, timestamp) {
        console.log(chalk.greenBright(`Running query:\nINSERT INTO orders \nVALUES (email, price, created) VALUES (${email}, ${price}, ${timestamp})\n`));
    }
}

module.exports = DatabaseService