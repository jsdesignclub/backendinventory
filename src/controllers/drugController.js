const medicineModel = require('../models/drugModels');

module.exports = {
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

  updateDrug: async (req,res,next) => {
    try{
      const medicineId = req.params.drugID;
      const updatedInfo = req.body;
      await medicineModel.updateById(medicineId,updatedInfo);
      res.status(201).json('Drug record updated successful!')
    }catch(error){
      next(error);
    }
  }
  
};
