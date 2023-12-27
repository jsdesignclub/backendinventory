// seeds/drugs.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('drugs').del()
      .then(function () {
        // Inserts seed entries
        return knex('drugs').insert([
          { DrugName: 'Aspirin', Manufacturer: 'Bayer', Dosage: '100mg', UnitPrice: 0.50, SellingPrice: 1.50, ExpiryDate: '2023-12-31' },
          { DrugName: 'Ibuprofen', Manufacturer: 'Pfizer', Dosage: '200mg', UnitPrice: 1.20, SellingPrice: 2.50, ExpiryDate: '2024-06-30' },
          { DrugName: 'Amoxicillin', Manufacturer: 'Novartis', Dosage: '500mg', UnitPrice: 2.00, SellingPrice: 3.50, ExpiryDate: '2023-08-15' },
        ]);
      });
  };
  