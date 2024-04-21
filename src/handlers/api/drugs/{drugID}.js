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
    }
};
