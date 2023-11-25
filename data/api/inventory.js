'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /api/inventory
 */
module.exports = {
    /**
     * summary: Get inventory list
     * description: Retrieve a list of medications in the pharmacy&#39;s inventory.
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/inventory',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Add a new medication to inventory
     * description: Add a new medication to the pharmacy&#39;s inventory.
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
                path: '/api/inventory',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
