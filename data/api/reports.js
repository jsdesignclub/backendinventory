'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /api/reports
 */
module.exports = {
    /**
     * summary: Get reports
     * description: Retrieve various reports.
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
                path: '/api/reports',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
