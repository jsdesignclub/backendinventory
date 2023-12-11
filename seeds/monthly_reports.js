// seeds/monthly_reports.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('monthly_reports').del()
      .then(function () {
        // Inserts seed entries
        return knex('monthly_reports').insert([
          { DrugID: 1, Year: 2023, Month: 12, StockLevel: 480, CostOfProduction: 0.50 * 20, Profit: (0.50 * 20) - (0.50 * 20) },
          { DrugID: 2, Year: 2023, Month: 12, StockLevel: 400, CostOfProduction: 1.20 * 50, Profit: 0 },
          { DrugID: 3, Year: 2023, Month: 12, StockLevel: 950, CostOfProduction: 2.00 * 30, Profit: (2.00 * 30) - (2.00 * 30) },
        ]);
      });
  };
  