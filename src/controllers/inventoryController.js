const medicineModel = require('../models/inventoryModel');

module.exports = {
    getnewInventory: async (req, res, next) => {
    
        try {
          const reorderPoint = req.query.drugID;
      
          
         if(!reorderPoint){
            const inventory = await medicineModel.getAllInventory();
            // res.send('hello')
            res.status(200).json(inventory);
          }else{
            const Inventory = await medicineModel.filterInventory(reorderPoint);
            res.status(200).json(Inventory);
          }     
        } catch (error) {
          next(error);
        }
      },
    
      getInventoryById: async (req, res, next) => {
        let inventoryId = req.params.inventoryID;
        
      
        try {
            const inventory = await medicineModel.inventoryById(inventoryId);
            res.status(200).send(inventory);     
          
        } catch (error) {
          next(error);
        }
      },

addnewInventory: async (req, res, next) => {
    try {
      const newInventory = req.body; // Assuming the request body contains the new inventory details
      await medicineModel.addInventory(newInventory);
      res.status(201).send(' added  inventory successfully');
    } catch (error) {
      next(error);
    }
  },

 
  updateInventory: async (req,res,next) => {
    try{
      const inventoryId = req.params.inventoryID;
      const updatedInfo = req.body;
      console.log('updated info::${}', updatedInfo)
      
      await medicineModel.updateById(inventoryId,updatedInfo);
      res.status(201).json('inventory updated successful!')
    }catch(error){
      next(error);
    }
  }
}