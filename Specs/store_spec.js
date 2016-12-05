var Store = require('../store');
var Customer = require('../customer');
var Record = require('../record');
var assert = require('assert');

describe('store', function() {
  it('should have an name', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(store.name, 'Rocking Ricks');
  });

  it('should have an city', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(store.city, 'Inverness');
  });
});

describe('store stock', function() {
    it('should start off with no stock', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      assert.equal(0, store.box.length);
      assert.equal(0, store.stock);
    });
    
    it('should be able to add a record (and stock increases)', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
      store.add(record);
      assert.deepEqual(record, store.box[0]);
      assert.equal(1, store.stock);
    });

    it('should be able to remove a record (and stock decreases)', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
      store.add(record);
      assert.equal(1, store.box.length);
      assert.equal(1, store.stock);
      store.remove(record);
      assert.equal(0, store.box.length);
      assert.equal(0, store.stock);
    });

});

describe('store cash', function() {
  it('should start off with £100 cash', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(100, store.cash);
  });

  it('should start off with £0 inventory', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    assert.equal(100, store.cash);
  });

  it('should be able to add a record and inventory increases by cost of record', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
    store.add(record);
    assert.deepEqual(record, store.box[0]);
    assert.equal(1, store.stock);
    assert.equal(9.99, store.inventory);
  });

  it('should be able to remove a record and inventory decreases by cost of record', function() {
    var store = new Store({name:'Rocking Ricks',city:"Inverness"});
    var record = new Record({artist:'REM',title:"Out of Time", price: 9.99});
    store.add(record);
    assert.equal(9.99, store.inventory);
    store.remove(record);
    assert.equal(0, store.inventory);
  });

});
  describe('store stock check', function() {
    it('should totalise stock value', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      var record1 = new Record({artist:'REM',title:"Out of Time", price: 10});
      var record2 = new Record({artist:'B52s',title:"Rocklobster", price: 10});
      var record3 = new Record({artist:'The Cure',title:"Standing on a beach", price: 10});
      store.add(record1);
      store.add(record2);
      store.add(record3);
      assert.equal(3, store.stock);
      assert.equal(30, store.stockValue());
    });

    it('should list stock', function() {
      var store = new Store({name:'Rocking Ricks',city:"Inverness"});
      var record1 = new Record({artist:'REM',title:"Out of Time", price: 10});
      store.add(record1);
      assert.equal(1, store.stock);
      assert.equal("name: REM, title: Out of Time, price: £10", store.list());
    });

});

    describe('store sales', function() {
      it('should be able to sell a record to customer', function() {
        var store = new Store({name:'Rocking Ricks',city:"Inverness"});
        var record1 = new Record({artist:'REM',title:"Out of Time", price: 10});
        var record2 = new Record({artist:'B52s',title:"Rocklobster", price: 10});
        var record3 = new Record({artist:'The Cure',title:"Standing on a beach", price: 10});
        store.add(record1);
        store.add(record2);
        store.add(record3);
        assert.equal(3, store.stock);
        store.sell(record3);
        assert.equal(2, store.stock);
        assert.equal(110, store.cash);
      });

      it('should be report on Cash and value of inventory', function() {
        var store = new Store({name:'Rocking Ricks',city:"Inverness"});
        var record1 = new Record({artist:'REM',title:"Out of Time", price: 10});
        var record2 = new Record({artist:'B52s',title:"Rocklobster", price: 10});
        var record3 = new Record({artist:'The Cure',title:"Standing on a beach", price: 10});
        store.add(record1);
        store.add(record2);
        store.add(record3);
        assert.equal(3, store.stock);
        assert.equal(130, store.financeReport());

      });

      it('customer should be able to buy a record', function() {
        var store = new Store({name:'Rocking Ricks',city:"Inverness"});
        var customer = new Customer({name: 'Bobby', cash: 20 });
        var record1 = new Record({artist:'REM',title:"Out of Time", price: 10});
        var record2 = new Record({artist:'B52s',title:"Rocklobster", price: 10});
        var record3 = new Record({artist:'The Cure',title:"Standing on a beach", price: 10});
        store.add(record1);
        store.add(record2);
        store.add(record3);
        assert.equal(3, store.stock);
        store.sell(record3);
        assert.equal(2, store.stock);
        assert.equal(110, store.cash);
        customer.buy(record3);
        assert.equal(10, customer.cash);

      });


});

