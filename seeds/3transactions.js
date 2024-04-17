// seeds/transactions.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('transactions').del()
      .then(function () {
        // Inserts seed entries
        return knex('transactions').insert([
          { DrugID: 1, TransactionType: 'Sale', QuantityOut: 20, CostOfProduction: 0.50 * 20 },
          { DrugID: 2, TransactionType: 'Purchase', QuantityIn: 100, CostOfProduction: 1.20 * 100 },
          { DrugID: 3, TransactionType: 'Sale', QuantityOut: 50, CostOfProduction: 2.00 * 50 },
        ]);
      });
  };
  