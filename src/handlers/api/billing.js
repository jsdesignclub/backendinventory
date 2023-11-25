'use strict';
// var dataProvider = require('../../data/api/billing.js');
/**
 * Operations on /api/billing
 */
module.exports = {
    /**
     * summary: Add a new billing record
     * description: Add a new billing record for a transaction.
     * parameters: body
     * produces: 
     * responses: 201
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
