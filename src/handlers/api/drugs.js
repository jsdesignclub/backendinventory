'use strict';

const drugController = require('../../controllers/drugController');
/**
 * Operations on /api/drugs
 */
module.exports = {
    /**
     * summary: Get list of drugs
     * description: Retrieve a list of drugs.
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        return drugController.getDrugsList(req, res, next);
        
    },

     /**
     * summary: Add a new medication to inventory
     * description: Add a new medication to the pharmacy&#39;s inventory.
     * parameters: body
     * produces: 
     * responses: 201
     */
     post: (req, res, next) => {
        return drugController.addDrugToDrugs(req, res, next);
      }
};
