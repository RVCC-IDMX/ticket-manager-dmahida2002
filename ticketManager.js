const chalk = require('chalk');

const { EventEmitter } = require('events');

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    if (this.supply > 0) {
      this.supply -= 1;
      this.emit('buy', email, price, Date.now());
      return;
    }

    this.emit("buy", email, price, Date.now());
  }
}

module.exports = TicketManager;