/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// migrations/20231123120000_create_medicines.js
exports.up = function (knex) {
    return knex.schema.createTable('medicines', function (table) {
      table.increments('id').primary();
      table.string('medicationName').notNullable();
      table.string('manufacturer').notNullable();
      table.string('category').notNullable();
      table.integer('stockLevel').notNullable();
      table.date('expiration_date').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('medicines');
  };
  