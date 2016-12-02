var Store = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.box = [];
  this.cash = 100;
  this.stock = 0;
  this.inventory = 0;
};


Store.prototype = {
  add: function(record) {
    this.box.push(record);
    this.stock ++;
    this.inventory += record.price;
  },
  remove: function(record) {
    this.box.pop(record);
    this.stock --;
    this.inventory -= record.price;
  }

}
module.exports = Store;