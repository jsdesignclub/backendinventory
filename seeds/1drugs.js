// seeds/drugs.js
exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('drugs').del()
      .then(function () {
        // Inserts seed entries
        return knex('drugs').insert([
          { DrugName: "Lignocaine 2% , 50Ml Injection", Manufacturer: "MSD", Dosage: "50mL", UnitPrice: 10.50, SellingPrice: 15.75, ExpiryDate: "2023-10-15" },
          { DrugName: "Albendazole 200Mg Tablets", Manufacturer: "MSD", Dosage: "200mg", UnitPrice: 2.25, SellingPrice: 4.50, ExpiryDate: "2023-11-30" },
          { DrugName: "Mebendazole 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 1.75, SellingPrice: 3.00, ExpiryDate: "2023-09-25" },
          { DrugName: "Aluminium Hydroxide+Magnesium Hydroxide", Manufacturer: "MSD", Dosage: "N/A", UnitPrice: 3.00, SellingPrice: 5.25, ExpiryDate: "2024-01-20" },
          { DrugName: "Omeprazole 20Mg Capsule", Manufacturer: "MSD", Dosage: "20mg", UnitPrice: 4.50, SellingPrice: 7.75, ExpiryDate: "2024-03-15" },
          { DrugName: "Magnesium Trisilicate Bp Compound Tablets", Manufacturer: "MSD", Dosage: "N/A", UnitPrice: 2.75, SellingPrice: 4.00, ExpiryDate: "2023-12-10" },
          { DrugName: "Cetrizine 10Mg Tablets", Manufacturer: "MSD", Dosage: "10mg", UnitPrice: 1.20, SellingPrice: 2.50, ExpiryDate: "2024-02-28" },
          { DrugName: "Chlorpheniramine 4Mg Tablets", Manufacturer: "MSD", Dosage: "4mg", UnitPrice: 1.30, SellingPrice: 2.75, ExpiryDate: "2023-11-15" },
          { DrugName: "Adrenaline 1Mg/Ml Injection 1Ml", Manufacturer: "MSD", Dosage: "1mg/mL", UnitPrice: 5.80, SellingPrice: 9.25, ExpiryDate: "2023-09-30" },
          { DrugName: "Hydrocortisone 100Mg, Powder For Injection", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 8.25, SellingPrice: 12.50, ExpiryDate: "2023-08-20" },
          { DrugName: "Salbutamol 4Mg Tablets", Manufacturer: "MSD", Dosage: "4mg", UnitPrice: 2.10, SellingPrice: 3.75, ExpiryDate: "2023-07-05" },
          { DrugName: "Cough Expectorant Adult Syrup,100Mls", Manufacturer: "MSD", Dosage: "N/A", UnitPrice: 6.00, SellingPrice: 9.50, ExpiryDate: "2023-10-18" },
          { DrugName: "Cough Expectorant Child 100Ml Syrup100Ml", Manufacturer: "MSD", Dosage: "N/A", UnitPrice: 5.50, SellingPrice: 8.00, ExpiryDate: "2023-11-20" },
          { DrugName: "Amoxicillin 250Mg Dispersible Tablets", Manufacturer: "MSD", Dosage: "250mg", UnitPrice: 2.80, SellingPrice: 4.25, ExpiryDate: "2023-12-31" },
          { DrugName: "Amoxicillin 250Mg Capsules", Manufacturer: "MSD", Dosage: "250mg", UnitPrice: 3.00, SellingPrice: 5.00, ExpiryDate: "2023-09-15" },
          { DrugName: "Ciprofloxacin 500Mg Tablets", Manufacturer: "MSD", Dosage: "500mg", UnitPrice: 4.75, SellingPrice: 7.25, ExpiryDate: "2024-02-10" },
          { DrugName: "Co-Trimoxazole 480Mg Tablets", Manufacturer: "MSD", Dosage: "480mg", UnitPrice: 3.50, SellingPrice: 6.00, ExpiryDate: "2023-10-30" },
          { DrugName: "Doxycycline 100Mg Capsules", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 5.00, SellingPrice: 8.50, ExpiryDate: "2023-09-05" },
          { DrugName: "Metronidazole 200Mg Tablets", Manufacturer: "MSD", Dosage: "200mg", UnitPrice: 1.50, SellingPrice: 3.00, ExpiryDate: "2023-12-15" },
          { DrugName: "Pethidine 50Mg/Ml Injection 1Ml", Manufacturer: "MSD", Dosage: "50mg/mL", UnitPrice: 6.75, SellingPrice: 10.00, ExpiryDate: "2023-11-20" },
          { DrugName: "Oxytocin 5U/Ml Injection 1Ml", Manufacturer: "MSD", Dosage: "5U/mL", UnitPrice: 3.25, SellingPrice: 6.00, ExpiryDate: "2023-09-10" },
          { DrugName: "Nifedipine 10Mg Capsules", Manufacturer: "MSD", Dosage: "10mg", UnitPrice: 2.75, SellingPrice: 5.00, ExpiryDate: "2024-01-25" },
          { DrugName: "Nifedipine 20Mg Tablets", Manufacturer: "MSD", Dosage: "20mg", UnitPrice: 3.25, SellingPrice: 5.50, ExpiryDate: "2023-10-30" },
          { DrugName: "Atenolol 50Mg Tablets", Manufacturer: "MSD", Dosage: "50mg", UnitPrice: 2.25, SellingPrice: 4.00, ExpiryDate: "2023-12-15" },
          { DrugName: "Glibenclamide 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 2.00, SellingPrice: 3.25, ExpiryDate: "2023-09-22" },
          { DrugName: "Metformin 500Mg Tablets", Manufacturer: "MSD", Dosage: "500mg", UnitPrice: 3.50, SellingPrice: 5.75, ExpiryDate: "2024-03-18" },
          { DrugName: "Insulin Human Soluble Vial 100Iu/Ml, 10 Ml Injection", Manufacturer: "MSD", Dosage: "100IU/mL", UnitPrice: 15.00, SellingPrice: 20.50, ExpiryDate: "2023-08-05" },
          { DrugName: "Insulin Human Zinc Suspension Injection 100Iu (Lente)", Manufacturer: "MSD", Dosage: "100IU", UnitPrice: 16.50, SellingPrice: 22.00, ExpiryDate: "2023-11-10" },
          { DrugName: "Insulin (Penfil Mixtard) 30Iu Injection", Manufacturer: "MSD", Dosage: "30IU", UnitPrice: 11.75, SellingPrice: 17.25, ExpiryDate: "2024-02-20" },
          { DrugName: "Atropine 1Mg/Ml, 1Ml Injection.", Manufacturer: "MSD", Dosage: "1mg/mL", UnitPrice: 6.20, SellingPrice: 9.75, ExpiryDate: "2023-10-30" },
          { DrugName: "Promethazine 25Mg Tablets", Manufacturer: "MSD", Dosage: "25mg", UnitPrice: 2.00, SellingPrice: 3.25, ExpiryDate: "2024-01-15" },
          { DrugName: "Fluconazole 150Mg Tablet", Manufacturer: "MSD", Dosage: "150mg", UnitPrice: 3.75, SellingPrice: 6.00, ExpiryDate: "2023-09-05" },
          { DrugName: "Clotrimazole Pessary With Applicator 100Mg", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 2.80, SellingPrice: 4.50, ExpiryDate: "2024-02-28" },
          { DrugName: "Nystatin  Suspension 100000 Iu/Ml 30Ml", Manufacturer: "MSD", Dosage: "100000IU/mL", UnitPrice: 5.00, SellingPrice: 7.25, ExpiryDate: "2023-11-10" },
          { DrugName: "Clotrimazole Cream/Ointment 1%, 20Gm", Manufacturer: "MSD", Dosage: "1%", UnitPrice: 3.20, SellingPrice: 5.25, ExpiryDate: "2023-08-15" },
          { DrugName: "Griseofulvin 500Mg Tablet", Manufacturer: "MSD", Dosage: "500mg", UnitPrice: 4.80, SellingPrice: 7.00, ExpiryDate: "2024-03-20" },
          { DrugName: "Lubricating Gel For 42G (For Catheter Insertion,Etc)", Manufacturer: "MSD", Dosage: "N/A", UnitPrice: 2.50, SellingPrice: 4.25, ExpiryDate: "2023-12-31" },
          { DrugName: "Artemether Lumefantrine  20/120 Mg", Manufacturer: "MSD", Dosage: "20/120mg", UnitPrice: 5.60, SellingPrice: 9.00, ExpiryDate: "2023-09-18" },
          { DrugName: "Artesunate 60Mg Tablets", Manufacturer: "MSD", Dosage: "60mg", UnitPrice: 3.50, SellingPrice: 6.00, ExpiryDate: "2023-11-10" },
          { DrugName: "Chloroquine 250Mg Tablets", Manufacturer: "MSD", Dosage: "250mg", UnitPrice: 2.90, SellingPrice: 4.50, ExpiryDate: "2024-02-28" },
          { DrugName: "Metronidazole 200Mg Tablets", Manufacturer: "MSD", Dosage: "200mg", UnitPrice: 2.25, SellingPrice: 4.00, ExpiryDate: "2023-10-05" },
          { DrugName: "Mefloquine 250Mg Tablets", Manufacturer: "MSD", Dosage: "250mg", UnitPrice: 6.50, SellingPrice: 9.00, ExpiryDate: "2023-08-25" },
           { DrugName: "Ibuprofen 400Mg Tablets", Manufacturer: "MSD", Dosage: "400mg", UnitPrice: 2.00, SellingPrice: 3.25, ExpiryDate: "2024-03-18" },
            { DrugName: "Paracetamol 500Mg Tablets", Manufacturer: "MSD", Dosage: "500mg", UnitPrice: 1.75, SellingPrice: 3.00, ExpiryDate: "2023-08-10" }, 
            { DrugName: "Aspirin 300Mg Tablets", Manufacturer: "MSD", Dosage: "300mg", UnitPrice: 1.90, SellingPrice: 3.50, ExpiryDate: "2023-10-15" },
             { DrugName: "Diazepam 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 2.10, SellingPrice: 3.50, ExpiryDate: "2023-11-30" }, 
             { DrugName: "Phenobarbitone 30Mg Tablets", Manufacturer: "MSD", Dosage: "30mg", UnitPrice: 2.30, SellingPrice: 3.75, ExpiryDate: "2023-12-25" },
              { DrugName: "Phenytoin Sodium 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 2.50, SellingPrice: 4.00, ExpiryDate: "2023-09-05" },
               { DrugName: "Carbamazepine 200Mg Tablets", Manufacturer: "MSD", Dosage: "200mg", UnitPrice: 3.00, SellingPrice: 5.00, ExpiryDate: "2023-07-20" },
                { DrugName: "Levetiracetam 500Mg Tablets", Manufacturer: "MSD", Dosage: "500mg", UnitPrice: 4.75, SellingPrice: 7.00, ExpiryDate: "2023-11-10" },
                 { DrugName: "Phenobarbitone 60Mg Tablets", Manufacturer: "MSD", Dosage: "60mg", UnitPrice: 3.20, SellingPrice: 5.00, ExpiryDate: "2024-02-28" },
                  { DrugName: "Amitriptyline 25Mg Tablets", Manufacturer: "MSD", Dosage: "25mg", UnitPrice: 2.50, SellingPrice: 4.00, ExpiryDate: "2023-10-15" },
                   { DrugName: "Chlorpromazine 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 3.50, SellingPrice: 5.75, ExpiryDate: "2023-12-10" },
                    { DrugName: "Fluphenazine 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 2.75, SellingPrice: 4.50, ExpiryDate: "2023-11-25" },
                     { DrugName: "Haloperidol 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 2.60, SellingPrice: 4.25, ExpiryDate: "2024-03-05" },
                      { DrugName: "Phenobarbitone 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 4.00, SellingPrice: 6.25, ExpiryDate: "2023-10-18" }, 
                      { DrugName: "Procyclidine 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 2.90, SellingPrice: 4.75, ExpiryDate: "2023-09-30" },
                       { DrugName: "Promethazine 10Mg Tablets", Manufacturer: "MSD", Dosage: "10mg", UnitPrice: 1.80, SellingPrice: 3.00, ExpiryDate: "2023-12-12" },
                        { DrugName: "Amiodarone 200Mg Tablets", Manufacturer: "MSD", Dosage: "200mg", UnitPrice: 5.00, SellingPrice: 7.25, ExpiryDate: "2023-11-15" },
                         { DrugName: "Atenolol 50Mg Tablets", Manufacturer: "MSD", Dosage: "50mg", UnitPrice: 2.50, SellingPrice: 4.25, ExpiryDate: "2024-02-28" }, 
                         { DrugName: "Atenolol 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 3.50, SellingPrice: 5.75, ExpiryDate: "2023-10-05" },
                          { DrugName: "Captopril 25Mg Tablets", Manufacturer: "MSD", Dosage: "25mg", UnitPrice: 2.80, SellingPrice: 4.50, ExpiryDate: "2024-01-20" }, 
                          { DrugName: "Captopril 50Mg Tablets", Manufacturer: "MSD", Dosage: "50mg", UnitPrice: 3.50, SellingPrice: 5.75, ExpiryDate: "2023-09-10" }, 
                          { DrugName: "Digoxin 250Mcg Tablets", Manufacturer: "MSD", Dosage: "250mcg", UnitPrice: 2.25, SellingPrice: 4.00, ExpiryDate: "2023-12-30" },
                           { DrugName: "Digoxin 500Mcg Tablets", Manufacturer: "MSD", Dosage: "500mcg", UnitPrice: 3.75, SellingPrice: 6.00, ExpiryDate: "2024-03-05" },
                            { DrugName: "Diltiazem 60Mg Tablets", Manufacturer: "MSD", Dosage: "60mg", UnitPrice: 2.90, SellingPrice: 4.75, ExpiryDate: "2023-08-18" }, 
                            { DrugName: "Enalapril 5Mg Tablets", Manufacturer: "MSD", Dosage: "5mg", UnitPrice: 1.90, SellingPrice: 3.25, ExpiryDate: "2023-12-25" }, 
                            { DrugName: "Hydralazine 25Mg Tablets", Manufacturer: "MSD", Dosage: "25mg", UnitPrice: 2.75, SellingPrice: 4.50, ExpiryDate: "2023-11-10" },
                             { DrugName: "Isosorbide Mononitrate 20Mg Tablets", Manufacturer: "MSD", Dosage: "20mg", UnitPrice: 3.00, SellingPrice: 5.00, ExpiryDate: "2023-10-15" },
                              { DrugName: "Labetalol 100Mg Tablets", Manufacturer: "MSD", Dosage: "100mg", UnitPrice: 2.80, SellingPrice: 4.50, ExpiryDate: "2023-11-30" }, 
                              { DrugName: "Propranolol 10Mg Tablets", Manufacturer: "MSD", Dosage: "10mg", UnitPrice: 1.75, SellingPrice: 3.00, ExpiryDate: "2023-10-05" }, 
                              { DrugName: "Verapamil 40Mg Tablets", Manufacturer: "MSD", Dosage: "40mg", UnitPrice: 1.80, SellingPrice: 3.00, ExpiryDate: "2023-08-10" },
            { DrugName: "Verapamil 80Mg Tablets", Manufacturer: "MSD", Dosage: "80mg", UnitPrice: 2.50, SellingPrice: 4.00, ExpiryDate: "2024-01-25" } 

          
          

//This list of medications includes various types, dosages, unit prices, selling prices, manufacturers, and expiry dates. It seems to be a detailed inventory of a pharmacy's stock.

        ]);
      });
  };
  