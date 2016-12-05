var Customer = function(params) {
  this.name = params.name;
  this.cash = params.cash;
  this.box = [];
};

Customer.prototype = {
  buy: function(record) {
    this.box.push(record);
    this.cash-= record.price;
  },
  sell: function(record) {
    this.box.pop(record);
    this.cash += record.price;
  },
}
module.exports = Customer;