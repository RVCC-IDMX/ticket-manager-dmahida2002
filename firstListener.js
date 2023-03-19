const chalk = require('chalk');

const TicketManager = require("./ticketManager");
const ticketManager = new TicketManager(10);

const { log } = console;

ticketManager.on("buy", () => {
    console.log("Someone bought a ticket!");
});