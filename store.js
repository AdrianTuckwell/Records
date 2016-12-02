var Store = function(params) {
  this.name = params.name;
  this.city = params.city;
  this.box = [];
};


Store.prototype = {
  add: function(record) {
    this.box.push(record);
  },
  remove: function(record) {
    this.box.pop(record);
  }

}
module.exports = Store;