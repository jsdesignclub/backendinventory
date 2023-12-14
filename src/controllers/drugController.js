const drugModels = require('../models/drugModels');
// const medicineModel = require('../models/drugModels');

module.exports = {
  getDrugsList: async (req, res, next) => {
    
    try {
      const DrugName = req.query.drugName;      
      if(DrugName ){
        console.log(`we are in${DrugName}`)  
        const medicine = await drugModels.filterDrug(DrugName);
        res.status(200).json(medicine);     
      
      }else{
        console.log('no filter')
        const medicines = await drugModels.getDrugsList();
        res.status(200).json(medicines);
        
      }     
    } catch (error) {
      next(error);
    }
  },

//   getInventoryById: async (req, res, next) => {
//     let medicineId =req.params.medicationId;

//     try {
//         const medicines = await medicineModel.getMedicineById(medicineId);
//         res.status(200).send(medicines);     
      
//     } catch (error) {
//       next(error);
//     }
//   },

  // addDrugToDrugs: async (req, res, next) => {
  //   try {
  //     const newDrug = req.body; // Assuming the request body contains the new medicine details
  //     await drugModels.addDrug(newDrug);
  //     res.status(201).send('Drug added to dragr successfully');
  //   } catch (error) {
  //     next(error);
  //   }
  // },




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
      if (medicineId ) {
        await drugModels.updateById(medicineId,updatedInfo);
        res.status(201).json('Drug record updated successful!')
      }
     else{
      await drugModels.addDrug(newDrug);
      res.status(201).send('Drug added to drug successfully');
     }
    }catch(error){
      next(error);
    }
  }
};
