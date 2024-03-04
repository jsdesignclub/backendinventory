// 'use strict';

/**
 * Operations on /api/inventory/{inventoryID}
 */

const inventoryController = require('../../../controllers/inventoryController');
module.exports = {
   
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        return  inventoryController.getInventoryById(req, res, next);
       
    },


    /**
     * summary: Update medication details
     * description: Update the details of a specific medication by ID.
     * parameters: inventoryID, body
     * produces: 
     * responses: 200, 404
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        return inventoryController.updateInventory(req,res,next);
    }
};


