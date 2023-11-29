// inventoryModel.js
const knexConfig = require('../../config/knexfile');
const knex = require('knex')(knexConfig);

module.exports = {

  getAllMedicines: async () => {
    try {
      const medicines = await knex.select('*').from('medicines');
      return medicines;
    } catch (error) {
      throw error;
    }
  },

  addMedicine: async (medicine) => {
    try {
      await knex('medicines').insert(medicine);
    } catch (error) {
      throw error;
    }
  },


getMedicineById: async(medicineId) => {
  try {
    const medicines = await knex.select('*').from('medicines').where('id',medicineId);
    return medicines;
  } catch (error) {
    throw error
  }
},


  deleteMedicine: async (medicineId) => {
    try{
      await knex('medicines').where({id:medicineId}).del();
    }catch(error){
      throw error;
    }
  }

};
