
const knexConfig = require('../../config/knexfile');
const medicationId = require('../handlers/api/inventory/{inventoryID}');
const knex = require('knex')(knexConfig);

module.exports = {

  getAllInventory: async () => {
    try {
      const inventories = await knex
        .select('inventory.*', 'drugs.DrugName','drugs.Manufacturer')
        .from('inventory')
        .join('drugs', 'inventory.DrugID', '=', 'drugs.DrugID');
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


      updateById: async (inventoryId,updatedData) => {
        try{
          await knex('inventory').update(updatedData).where({InventoryID:inventoryId});
        }catch(error){
          throw error;
        }
      }
}
