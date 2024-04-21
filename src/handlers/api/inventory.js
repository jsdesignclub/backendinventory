
'use strict';
/**
 * Operations on /api/inventory
 */

const inventoryController = require('../../controllers/inventoryController');




module.exports = {
    /**
     * summary: Get inventory list
     * description: Retrieve a list of medications in the pharmacy&#39;s inventory.
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: (req, res, next) => {
        return inventoryController.getnewInventory(req, res, next);
      },
    /**
     * summary: Add a new inventory
     * description: Add a new medication to the pharmacy&#39;s inventory.
     * parameters: body
     * produces: 
     * responses: 201
     */
     post: (req, res, next) => {
        return inventoryController.addnewInventory(req, res, next);
      }
};
