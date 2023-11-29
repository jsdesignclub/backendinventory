const medicineModel = require('../models/inventoryModel');

module.exports = {
  getInventoryList: async (req, res, next) => {
    try {
      const medicines = await medicineModel.getAllMedicines();
      res.status(200).json(medicines);
    } catch (error) {
      next(error);
    }
  },

  addMedicineToInventory: async (req, res, next) => {
    try {
      const newMedicine = req.body; // Assuming the request body contains the new medicine details
      await medicineModel.addMedicine(newMedicine);
      res.status(201).send('Medicine added to inventory successfully');
    } catch (error) {
      next(error);
    }
  },


getInventoryById: async (req, res, next) => {
  try {
    let medicineId =req.params;
    const medicines = await medicineModel.getMedicineById();
    res.status(200).json(medicines);
  } catch (error) {
    next(error);
  }
},

  deleteMedicine: async (req,res,next) => {
    try{
      const medicineId = req.params.medicationId;
      await medicineModel.deleteMedicine(medicineId);
      res.status(201).json('Medicine deleted succesfully!');
    }catch(error){
      next(error)
    }
  },

  updateMedicine: async (req,res,next) => {
    try{
      const medicineId = req.params.medicationId;
      const updatedInfo = req.body;
      await medicineModel.updateById(medicineId,updatedInfo);
      res.status(201).json('Medicine updated successful!')
    }catch(error){
      next(error);
    }
  }
};
