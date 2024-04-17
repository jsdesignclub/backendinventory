// seeds/inventory.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('inventory').del()
      .then(function () {
        // Inserts seed entries
        return knex('inventory').insert([
          { DrugID: 1, StockLevel: 500, ReorderPoint: 100 },
          { DrugID: 2, StockLevel: 300, ReorderPoint: 50 },
          { DrugID: 3, StockLevel: 1000, ReorderPoint: 200 },
        ]);
      });
  };
  