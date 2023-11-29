exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('medicines').del()
    .then(function () {
      // Inserts seed entries
      return knex('medicines').insert([
        { medicationName: 'Tylenol', manufacturer: 'Johnson & Johnson', category: 'Painkiller', stockLevel: 100, expiration_date: '2023-12-01' },
        { medicationName: 'Advil', manufacturer: 'Pfizer', category: 'Anti-inflammatory', stockLevel: 50, expiration_date: '2024-02-01' },
        { medicationName: 'Motrin', manufacturer: 'Bayer', category: 'Painkiller', stockLevel: 75, expiration_date: '2023-11-15' },
        { medicationName: 'Amoxil', manufacturer: 'GlaxoSmithKline', category: 'Antibiotic', stockLevel: 30, expiration_date: '2023-11-30' },
        { medicationName: 'Aspirin', manufacturer: 'Bayer', category: 'Blood Thinner', stockLevel: 40, expiration_date: '2023-12-15' },
        { medicationName: 'Nurofen', manufacturer: 'Reckitt Benckiser', category: 'Painkiller', stockLevel: 60, expiration_date: '2024-01-05' },
        { medicationName: 'Zyrtec', manufacturer: 'Johnson & Johnson', category: 'Antihistamine', stockLevel: 25, expiration_date: '2024-03-10' },
        { medicationName: 'Lipitor', manufacturer: 'Pfizer', category: 'Cholesterol Medication', stockLevel: 15, expiration_date: '2023-11-20' },
        { medicationName: 'Synthroid', manufacturer: 'AbbVie', category: 'Thyroid Medication', stockLevel: 20, expiration_date: '2023-12-10' },
        { medicationName: 'Ventolin', manufacturer: 'GlaxoSmithKline', category: 'Bronchodilator', stockLevel: 35, expiration_date: '2024-02-20' },
        // Add more medicines as needed...
      ]);
    });
};
