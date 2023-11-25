'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /api/prescriptions
 */
module.exports = {
    /**
     * summary: Get prescription list
     * description: Retrieve a list of prescriptions.
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
                path: '/api/prescriptions',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: Create a new prescription
     * description: Create a new prescription for a patient.
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
                path: '/api/prescriptions',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
