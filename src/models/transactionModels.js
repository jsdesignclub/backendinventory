const knexConfig = require('../../config/knexfile');
const knex = require('knex')(knexConfig);

module.exports = {
    getAllTransaction: async () =>{
        try{   
          const transactions = await knex.select('transactions.*','drugs.DrugName')
          .from('transactions')
        .join('drugs', 'transactions.DrugID', '=', 'drugs.DrugID');
          return transactions;
        }catch(error){
          throw error;
        }
    },
    
    postTransaction: async (transaction) => {
        try {
            await knex.transaction(async (trx) => {
    
                await knex('transactions').transacting(trx).insert(transaction);
    
                if(transaction.TransactionType==='Purchase'){
                    await knex('inventory').transacting(trx)
                    .where('DrugID', transaction.DrugID)
                    //.increment('StockLevel', transaction.QuantityIn);
    
                    console.log('Transaction and inventory update successful');
                }else{
                    await knex('inventory').transacting(trx)
                    .where('DrugID', transaction.DrugID);
                   // .decrement('StockLevel', transaction.QuantityOut);
                }
                
            });
        } catch (error) {
            throw error; 
        }
    }
    
    
}