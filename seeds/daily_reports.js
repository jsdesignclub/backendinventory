// seeds/daily_reports.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('daily_reports').del()
      .then(function () {
        // Inserts seed entries
        return knex('daily_reports').insert([
          { DrugID: 1, ReportDate: '2023-12-01', StockLevel: 480, CostOfProduction: 0.50 * 20, Profit: (0.50 * 20) - (0.50 * 20) },
          { DrugID: 2, ReportDate: '2023-12-01', StockLevel: 400, CostOfProduction: 1.20 * 50, Profit: 0 },
          { DrugID: 3, ReportDate: '2023-12-01', StockLevel: 950, CostOfProduction: 2.00 * 30, Profit: (2.00 * 30) - (2.00 * 30) },
        ]);
      });
  };
  
  