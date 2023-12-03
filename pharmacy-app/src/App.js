import React from 'react';


import Dashboard from './components/Dashboard';  // Import the Dashboard component

function App() {
  return (
    <div className="App">
      <Dashboard />  {/* Render the Dashboard component instead of InventoryComponent */}
    </div>
  );
}

export default App;
