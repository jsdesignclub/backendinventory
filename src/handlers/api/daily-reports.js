'use strict';
/**
 * Operations on /api/daily-reports
 */

const dailyController = require('../../controllers/reportController')
module.exports = {
    /**
     * summary: Get list of daily reports
     * description: Retrieve a list of daily reports.
     * parameters: 
     * produces: 
     * responses: 200
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Add a new daily report
     * description: Add a new daily report to the pharmacy&#39;s records.
     * parameters: body
     * produces: 
     * responses: 201
     */
    post: (req, res, next)=> {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        return dailyController.createDailyReport(req,res,next)

    }   
};
