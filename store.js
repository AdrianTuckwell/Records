var Store = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.box = [];
};


Store.prototype = {
  add: function(record) {
    this.box.push(record);
  }
}
module.exports = Store;