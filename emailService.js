const chalk = require('chalk');

const { log } = console;

class EmailService {
    send(email) {
        console.log(chalk.greenBright(`Sending email to ${email}\n`));
    }
}

module.exports = EmailService