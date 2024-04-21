const knexConfig = require('../../config/knexfile');
const knex = require('knex')(knexConfig);
const reportController = require('../controllers/reportController')

module.exports = {

  generateDailyReportsInRange: async (knex, startDate, endDate) => {
    try {
      const transactions = await knex('transactions')
        .select('DrugID', 'TransactionDate', knex.raw('SUM(QuantityIn - QuantityOut) as StockChange'))
        .whereBetween('TransactionDate', [startDate, endDate])
        .groupBy('DrugID', 'TransactionDate');

      const reportData = transactions.map(transaction => {
        const { DrugID, TransactionDate, StockChange } = transaction;
        const stockLevel = StockChange > 0 ? StockChange : 0;
        const costOfProduction = reportController.calculateCostOfProduction(DrugID, StockChange);
        const profit = reportController.calculateProfit(DrugID, StockChange, costOfProduction);

        return {
          DrugID,
          ReportDate: TransactionDate,
          StockLevel: stockLevel,
          CostOfProduction: costOfProduction,
          Profit: profit,
        };
      });

      // Insert the generated report data into daily_reports table
      await knex('daily_reports').insert(reportData);

    } catch (error) {
      // Handle the error, log it, or throw a custom error if needed
      console.error('Error generating daily reports:', error);
      throw error;
    }
  }

  // Add other methods or functions as needed
};
