// inventoryModel.js
const knexConfig = require('../../config/knexfile');
const knex = require('knex')(knexConfig);

module.exports = {

  getDrugsList: async () => {
    try {
      const drugs = await knex.select('*').from('drugs');
      return drugs;
    } catch (error) {
      throw error;
    }
  },


  filterDrug: async (DrugName) => {
   try{
    const result = await knex.select('*').from('drugs').where('DrugName',DrugName);
    return result;
   }catch(error) {
    throw error;
  }
  }, 

//   getMedicineById:async(medicineId)=>{
//     try{
//       const medicines = await knex.select('*').from('medicines').where('id',medicineId);
//       return medicines;
//     }catch(error){
//     throw error;
//     }
//   },

  

  addDrug: async (newDrug) => {
    try {
      await knex('drugs').insert(newDrug);
    } catch (error) {
      throw error;
    }
  },



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
