exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('medicines').del()
    .then(function () {
      // Inserts seed entries
      return knex('medicines').insert([
        { name: 'Tylenol', manufacturer: 'Johnson & Johnson', category: 'Painkiller', quantity: 100, expiration_date: '2023-12-01' },
        { name: 'Advil', manufacturer: 'Pfizer', category: 'Anti-inflammatory', quantity: 50, expiration_date: '2024-02-01' },
        { name: 'Motrin', manufacturer: 'Bayer', category: 'Painkiller', quantity: 75, expiration_date: '2023-11-15' },
        { name: 'Amoxil', manufacturer: 'GlaxoSmithKline', category: 'Antibiotic', quantity: 30, expiration_date: '2023-11-30' },
        { name: 'Aspirin', manufacturer: 'Bayer', category: 'Blood Thinner', quantity: 40, expiration_date: '2023-12-15' },
        { name: 'Nurofen', manufacturer: 'Reckitt Benckiser', category: 'Painkiller', quantity: 60, expiration_date: '2024-01-05' },
        { name: 'Zyrtec', manufacturer: 'Johnson & Johnson', category: 'Antihistamine', quantity: 25, expiration_date: '2024-03-10' },
        { name: 'Lipitor', manufacturer: 'Pfizer', category: 'Cholesterol Medication', quantity: 15, expiration_date: '2023-11-20' },
        { name: 'Synthroid', manufacturer: 'AbbVie', category: 'Thyroid Medication', quantity: 20, expiration_date: '2023-12-10' },
        { name: 'Ventolin', manufacturer: 'GlaxoSmithKline', category: 'Bronchodilator', quantity: 35, expiration_date: '2024-02-20' },
        // Add more medicines as needed...
      ]);
    });
};
