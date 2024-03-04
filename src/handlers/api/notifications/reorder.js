'use strict';

const inventoryController = require("../../../controllers/inventoryController");

/*
 * Operations on /api/notifications/reorder
 */
module.exports = {
    /**
     * summary: Notify reorder points
     * description: Notify the front end about drugs reaching reorder points.
     * parameters: body
     * produces: 
     * responses: 201
     */
    post: function (req, res, next) {
        /*
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
       return inventoryController.addnewReorder(req, res, next);
    }
};
