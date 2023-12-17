const reportModel = require('../models/reportModels');

module.exports = {
    
    createDailyReport: async (req,res,next) => {
        try{
            const data = req.body
          await  reportModel.generateDailyReportsInRange(data)
          res.status(201).json('report generated successfuly');
        }catch(error){
          next(error);
        }
    },
 calculateCostOfProduction:async(DrugID, stockChange) =>{
       
        return stockChange * 0.50; 
      },
      
      calculateProfit:async(DrugID, stockChange, costOfProduction)=> {
        // Implement your logic to calculate the profit based on DrugID, stock change, and cost of production
        // Replace the following line with your actual logic.
        return stockChange * 0.50 - costOfProduction; 
      }


}

