'use strict';

/**
 * Operations on /api/inventory/{inventoryID}
 */
module.exports = {
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
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
