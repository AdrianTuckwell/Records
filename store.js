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
  },
  stockValue: function() 
  {
      var total = 0;
      for (var item of this.box)
      {
          total += item.price;
      }
      return total;
  },
  list: function()
  {
    var inventory = this.box.map(function(record){
          return   "name: " + record.artist.toString()
               + ", title: " + record.title.toString() 
               + ", price: £" + record.price.toString();
        });
    return inventory.toString();
  }



  //"name: REM, title: Out of Time, price: £10"









};
module.exports = Store;