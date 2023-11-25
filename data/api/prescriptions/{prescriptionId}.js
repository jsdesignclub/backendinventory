'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/prescriptions/{prescriptionId}
 */
module.exports = {
    /**
     * summary: Get prescription details
     * description: Retrieve details of a specific prescription by ID.
     * parameters: prescriptionId
     * produces: 
     * responses: 200, 404
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Update prescription details
     * description: Update the details of a specific prescription by ID.
     * parameters: prescriptionId, body
     * produces: 
     * responses: 200, 404
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'put',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Delete prescription
     * description: Delete a specific prescription by ID.
     * parameters: prescriptionId
     * produces: 
     * responses: 204, 404
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/prescriptions/{prescriptionId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
