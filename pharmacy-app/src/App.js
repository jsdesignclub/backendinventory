// src/App.js

import React from 'react';
import InventoryComponent from './components/InventoryComponent';
import NewMedicine from './components/form/AddMedicineForm';
import SaleForm from './components/form/SaleForm';

function App() {
  return (
    <div className="App">
      <NewMedicine/>
      <SaleForm/>
      <InventoryComponent />
    </div>
  );
}

export default App;
