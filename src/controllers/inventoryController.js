// const medicineModel = require('../models/inventoryModel');

// module.exports = {
//   getInventoryList: async (req, res, next) => {
    
//     try {
//       const medicationName = req.query.medicationName;
      
//       if(!medicationName){
//         const medicines = await medicineModel.getAllMedicines();
//         res.status(200).json(medicines);
//       }else{
//         const medicine = await medicineModel.filterMedicine(medicationName);
//         res.status(200).json(medicine);
//       }     
//     } catch (error) {
//       next(error);
//     }
//   },

//   getInventoryById: async (req, res, next) => {
//     let medicineId =req.params.medicationId;

//     try {
//         const medicines = await medicineModel.getMedicineById(medicineId);
//         res.status(200).send(medicines);     
      
//     } catch (error) {
//       next(error);
//     }
//   },

//   addMedicineToInventory: async (req, res, next) => {
//     try {
//       const newMedicine = req.body; // Assuming the request body contains the new medicine details
//       await medicineModel.addMedicine(newMedicine);
//       res.status(201).send('Medicine added to inventory successfully');
//     } catch (error) {
//       next(error);
//     }
//   },




//   deleteMedicine: async (req,res,next) => {
//     try{
//       const medicineId = req.params.medicationId;
//       await medicineModel.deleteMedicine(medicineId);
//       res.status(201).json('Medicine deleted succesfully!');
//     }catch(error){
//       next(error)
//     }
//   },

//   updateMedicine: async (req,res,next) => {
//     try{
//       const medicineId = req.params.medicationId;
//       const updatedInfo = req.body;
//       await medicineModel.updateById(medicineId,updatedInfo);
//       res.status(201).json('Medicine updated successful!')
//     }catch(error){
//       next(error);
//     }
//   }
// };


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

  // addnewexpiration: async (req, res, next) => {
  //   try {
  //     const newExpiry = req.body; // Assuming the request body contains the new inventory details
  //     await medicineModel.addExpiration(newExpiry);
  //     res.status(201).send(' added  expiration successfully');
  //   } catch (error) {
  //     next(error);
  //   }
  // },

  // addnewReorder: async (req, res, next) => {
  //   try {
  //     const newReorder = req.body; // Assuming the request body contains the new inventory details
  //     await medicineModel.addReorder(newReorder);
  //     res.status(201).send(' added  reorder successfully');
  //   } catch (error) {
  //     next(error);
  //   }
  // },
  updateInventory: async (req,res,next) => {
    try{
      const inventoryId = req.params.inventoryID;
      const updatedInfo = req.body;
      await medicineModel.updateById(inventoryId,updatedInfo);
      res.status(201).json('inventory updated successful!')
    }catch(error){
      next(error);
    }
  }
}