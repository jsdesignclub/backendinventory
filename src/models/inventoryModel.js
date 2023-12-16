// // inventoryModel.js
// const knexConfig = require('../../config/knexfile');
// const MedicationId = require('../handlers/api/inventory/{medicationId}');
// const knex = require('knex')(knexConfig);

// module.exports = {

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

//   updateById: async (medicineId,updatedData) => {
//     try{
//       await knex('medicines').where({id:medicineId}).update(updatedData);
//     }catch(error){
//       throw error;
//     }
//   }

// };
// inventoryModel.js
const knexConfig = require('../../config/knexfile');
const medicationId = require('../handlers/api/inventory/{inventoryID}');
const knex = require('knex')(knexConfig);

module.exports = {

    getAllInventory: async () => {
        try {
          const inventories = await knex.select('*').from('inventory');
          return inventories;
        } catch (error) {
          throw error;
        }
      },

      filterInventory: async (quantity) => {
        try{
         const result = await knex.select('*').from('inventory').where('DrugID',quantity);
         return result;
         
        }catch(error) {
         throw error;
       }
       }, 

    inventoryById: async (inventoryId) => {
        try{
          const inventory = await knex.select('*').from('inventory').where({InventoryID:inventoryId});
          return inventory;
        }catch(error){
        throw error;
        }
      },

    addInventory: async (newInventory) => {
        try {
          await knex('inventory').insert(newInventory);
        } catch (error) {
          throw error;
        }
      },

      // addExpiration: async (newExpiry) => {
      //   try {
      //     await knex('inventory').insert(newExpiry);
      //   } catch (error) {
      //     throw error;
      //   }
      // },

      // addReorder: async (newReorder) => {
      //   try {
      //     await knex('inventory').insert(newReorder);
      //   } catch (error) {
      //     throw error;
      //   }
      // },

      updateById: async (inventoryId,updatedData) => {
        try{
          await knex('inventory').update(updatedData).where({InventoryID:inventoryId});
        }catch(error){
          throw error;
        }
      }
}
