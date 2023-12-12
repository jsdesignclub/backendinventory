// inventoryModel.js
const knexConfig = require('../../config/knexfile');
const MedicationId = require('../handlers/api/drugs/{drugID}');
const knex = require('knex')(knexConfig);

module.exports = {

//   getAllMedicines: async () => {
//     try {
//       const medicines = await knex.select('*').from('medicines');
//       return medicines;
//     } catch (error) {
//       throw error;
//     }
//   },


//   filterMedicine: async (medicalName) => {
//    try{
//     const result = await knex.select('*').from('medicines').where('medicationName',medicalName);
//     return result;
    
//    }catch(error) {
//     throw error;
//   }
//   }, 

//   getMedicineById:async(medicineId)=>{
//     try{
//       const medicines = await knex.select('*').from('medicines').where('id',medicineId);
//       return medicines;
//     }catch(error){
//     throw error;
//     }
//   },

  

//   addMedicine: async (medicine) => {
//     try {
//       await knex('medicines').insert(medicine);
//     } catch (error) {
//       throw error;
//     }
//   },



//   deleteMedicine: async (medicineId) => {
//     try{
//       await knex('medicines').where({id:medicineId}).del();
//     }catch(error){
//       throw error;
//     }
//   },

  updateById: async (medicineId,updatedData) => {
    try{
      await knex('drugs').where({DrugID:medicineId}).update(updatedData);
    }catch(error){
      throw error;
    }
  }

};
