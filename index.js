const chalk = require('chalk');
const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const { log } = console;
const { error } = console;

ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (error) => {
    console.error(`Gracefully handling our error: ${error}`);
});

const onBuy = () => {
    log(chalk.gray.bold.underline('I will be removed soon\n'));
  };

log(chalk.bgBlueBright(`We have ${ticketManager.listenerCount('buy')} listener(s) for the buy event\n`));
log(chalk.bgBlueBright(`We have ${ticketManager.listenerCount('error')} listener(s) for the error event\n`));

ticketManager.on("buy", onBuy);

console.log(chalk.yellowBright(chalk.yellowBright(`We added a new event listener bringing our total count for the buy event to: ${ticketManager.listenerCount("buy")}`)));
ticketManager.buy("test@email", 20);

ticketManager.off("buy", onBuy);

console.log(chalk.yellowBright(`We now have: ${ticketManager.listenerCount("buy")} listener(s) for the buy event`));
ticketManager.buy("test@email", 20);

ticketManager.removeAllListeners("buy");
console.log(chalk.yellowBright(`We have ${ticketManager.listenerCount("buy")} listeners for the buy event`));
ticketManager.buy("test@email", 20);
console.log(chalk.bgRedBright('The last ticket was bought'));