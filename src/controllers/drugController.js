// const drugs = require('../handlers/api/drugs');
const drugModels = require('../models/drugModels');
// const drug = require('../models/drugModels')


module.exports = {
  getDrugsList: async (req,res,next) =>{
    console.log('**** Before filter*****')
    try {
      const drugName = req.query.drugName;      
      if(drugName ){
        const medicine = await drugModels.filterDrug(drugName);
        console.log('Drug details::',medicine)
        res.status(200).json(medicine);     
      
      }else{
       
        const medicines = await drugModels.getDrugsList();
        console.log('List of drugs:::', medicines)
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
        //update existing drug record
        await drugModels.updateById(medicineId,updatedInfo);
        res.status(201).json('Drug record updated successful!')

      } else {
        //add a new drug record
      const newDrug=req.body;
      //chhek if similar drug already exists
      const existingDrug = await drugModels.findDrugByInfo(newDrug)
      if(existingDrug){
        //drug already exists, handle accodingly
        res.status(400).json('Duplicate drug record found!')
      }else{
        //Drug not exist proceed with adding
      await drugModels.addDrug(newDrug);
      res.status(201).send('Drug added to drug successfully');
     }
    }
    }catch(error){
      next(error);
    }
  }
  
};
