'use strict';
/**
 * Operations on /api/drugs/{drugID}
 *
 */

const drugController = require('../../../controllers/drugController')
module.exports = {
    /**
     * summary: Update drug details
     * description: Update the details of a specific drug by ID.
     * parameters: drugID, body
     * produces: 
     * responses: 200, 404
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
       return drugController.updateDrug(req,res,next)
    },

     /**
     * summary: Get inventory list
     * description: Retrieve a list of medications in the pharmacy&#39;s inventory.
     * parameters: 
     * produces: 
     * responses: 200
     */
    //  get: (req, res, next) => {         why its work while am no uncomment
    //      /**
    //      * Get the data for response 200
    //      * For response `default` status 200 is used.
    //      */
    //     return drugController.getDrugsList(req, res, next);
    //   }

     /**
     * summary: Add a new medication to inventory
     * description: Add a new medication to the pharmacy&#39;s inventory.
     * parameters: body
     * produces: 
     * responses: 201
     */
  
};
