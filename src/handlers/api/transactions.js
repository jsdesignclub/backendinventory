'use strict';

const transactionsController = require('../../controllers/transactionControler');

/**
 * Operations on /api/transactions
 */
module.exports = {
    /**
     * summary: Get list of transactions
     * description: Retrieve a list of transactions.
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        return transactionsController.getAllTransaction(req,res,next);
    },
    /**
     * summary: Add a new transaction
     * description: Add a new transaction to the pharmacy&#39;s records.
     * parameters: body
     * produces: 
     * responses: 201
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        
        return transactionsController.postTransaction(req,res,next);
    }
};
