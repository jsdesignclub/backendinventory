// seeds/suppliers.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('suppliers').del()
      .then(function () {
        // Inserts seed entries
        return knex('suppliers').insert([
          { SupplierName: 'ABC Pharma', ContactPerson: 'John Doe', ContactNumber: '+1234567890', Email: 'john@example.com' },
          { SupplierName: 'XYZ Suppliers', ContactPerson: 'Jane Smith', ContactNumber: '+9876543210', Email: 'jane@example.com' },
        ]);
      });
  };
  