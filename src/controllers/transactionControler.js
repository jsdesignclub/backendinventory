const transactionModel = require('../models/transactionModels');

module.exports = {
    getAllTransaction: async (req,res,next) => {
        try{
          const transactions = await  transactionModel.getAllTransaction();
          res.status(201).json(transactions);
        }catch(error){
          next(error);
        }
    },
    
    postTransaction: async (req,res,next) => {
        try{
          await transactionModel.postTransaction(req.body);
          res.status(201).json('Transaction Added successfully');
        }catch(error){
          next(error);
        }
    }
}