'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/inventory/{medicationId}
 */
module.exports = {
    /**
     * summary: Get medication details
     * description: Retrieve details of a specific medication by ID.
     * parameters: medicationId
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
                path: '/api/inventory/{medicationId}',
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
                path: '/api/inventory/{medicationId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Update medication details
     * description: Update the details of a specific medication by ID.
     * parameters: medicationId, body
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
                path: '/api/inventory/{medicationId}',
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
                path: '/api/inventory/{medicationId}',
                operation: 'put',
                response: '404'
            }, callback);
        }
    },
    /**
     * summary: Delete medication
     * description: Delete a specific medication by ID.
     * parameters: medicationId
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
                path: '/api/inventory/{medicationId}',
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
                path: '/api/inventory/{medicationId}',
                operation: 'delete',
                response: '404'
            }, callback);
        }
    }
};
