'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /api/billing
 */
module.exports = {
    /**
     * summary: Add a new billing record
     * description: Add a new billing record for a transaction.
     * parameters: body
     * produces: 
     * responses: 201
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/billing',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
