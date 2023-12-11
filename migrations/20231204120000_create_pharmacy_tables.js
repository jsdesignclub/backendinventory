// migrations/20231204120000_create_pharmacy_tables.js
exports.up = function (knex) {
    return Promise.all([
      // Drugs Table
      knex.schema.createTable('drugs', function (table) {
        table.increments('DrugID').primary();
        table.string('DrugName').notNullable();
        table.string('Manufacturer').notNullable();
        table.string('Dosage').notNullable();
        table.decimal('UnitPrice', 10, 2).notNullable();
        table.date('ExpiryDate').notNullable();
      }),
  
      // Suppliers Table
      knex.schema.createTable('suppliers', function (table) {
        table.increments('SupplierID').primary();
        table.string('SupplierName').notNullable();
        table.string('ContactPerson').notNullable();
        table.string('ContactNumber').notNullable();
        table.string('Email').notNullable();
      }),
  
      // Inventory Table
      knex.schema.createTable('inventory', function (table) {
        table.increments('InventoryID').primary();
        table.integer('DrugID').unsigned().notNullable();
        table.integer('StockLevel').notNullable();
        table.integer('ReorderPoint').notNullable();
        table.timestamp('LastUpdated').defaultTo(knex.fn.now());
        table.foreign('DrugID').references('drugs.DrugID');
      }),
  
      // Transactions Table
      knex.schema.createTable('transactions', function (table) {
        table.increments('TransactionID').primary();
        table.integer('DrugID').unsigned().notNullable();
        table.string('TransactionType').notNullable(); // Sale, Purchase, Return, etc.
        table.integer('QuantityIn').defaultTo(0);
        table.integer('QuantityOut').defaultTo(0);
        table.timestamp('TransactionDate').defaultTo(knex.fn.now());
        table.decimal('CostOfProduction', 10, 2);
        table.foreign('DrugID').references('drugs.DrugID');
      }),
  
      // DailyReports Table
      knex.schema.createTable('daily_reports', function (table) {
        table.increments('ReportID').primary();
        table.integer('DrugID').unsigned().notNullable();
        table.date('ReportDate').notNullable();
        table.integer('StockLevel').notNullable();
        table.decimal('CostOfProduction', 10, 2);
        table.decimal('Profit', 10, 2);
        table.foreign('DrugID').references('drugs.DrugID');
      }),
  
      // MonthlyReports Table
      knex.schema.createTable('monthly_reports', function (table) {
        table.increments('ReportID').primary();
        table.integer('DrugID').unsigned().notNullable();
        table.integer('Year').notNullable();
        table.integer('Month').notNullable();
        table.integer('StockLevel').notNullable();
        table.decimal('CostOfProduction', 10, 2);
        table.decimal('Profit', 10, 2);
        table.foreign('DrugID').references('drugs.DrugID');
      }),
    ]);
  };
  
  exports.down = function (knex) {
    return Promise.all([
      knex.schema.dropTable('monthly_reports'),
      knex.schema.dropTable('daily_reports'),
      knex.schema.dropTable('transactions'),
      knex.schema.dropTable('inventory'),
      knex.schema.dropTable('suppliers'),
      knex.schema.dropTable('drugs'),
    ]);
  };
  