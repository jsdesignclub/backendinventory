'use strict';
/**
 * Operations on /api/inventory/{medicationId}
 */

const inventoryController = require('../../../controllers/inventoryController');

module.exports = {
    /**
     * summary: Get medication details
     * description: Retrieve details of a specific medication by ID.
     * parameters: medicationId
     * produces: 
     * responses: 200, 404
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
      
        return inventoryController.getInventoryById(req, res, next);
    },
    /**
     * summary: Update medication details
     * description: Update the details of a specific medication by ID.
     * parameters: medicationId, body
     * produces: 
     * responses: 200, 404
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Delete medication
     * description: Delete a specific medication by ID.
     * parameters: medicationId
     * produces: 
     * responses: 204, 404
     */
    delete: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */

        return inventoryController.deleteMedicine(req,res,next);  
    }
};
