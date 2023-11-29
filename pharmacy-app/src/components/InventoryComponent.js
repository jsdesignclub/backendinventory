// src/components/InventoryComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryComponent = () => {
  const [inventory, setInventory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newInventoryData, setNewInventoryData] = useState({
    medicationName: '',
    manufacturer: '',
    category: '',
    stockLevel: 0,
    expirationDate: '',
  });

  useEffect(() => {
    // Fetch all inventory records
    axios.get('http://localhost:8000/api/inventory')
      .then(response => setInventory(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInventoryData({
      ...newInventoryData,
      [name]: value,
    });
  };

  const addNewInventory = async () => {
    try {
      // Post the new inventory record
      const response = await axios.post('http://localhost:8000/api/inventory', newInventoryData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      setInventory([...inventory, response.data]);
      setShowForm(false); // Close the form after successful submission
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Pharmacy Inventory</h1>
      <button onClick={toggleForm}>Toggle Form</button>
      {showForm && (
        <div>
          <h2>Add New Inventory</h2>
          <form>
            <label>Medication Name:
              <input type="text" name="medicationName" value={newInventoryData.medicationName} onChange={handleInputChange} />
            </label>
            <br />
            <label>Manufacturer:
              <input type="text" name="manufacturer" value={newInventoryData.manufacturer} onChange={handleInputChange} />
            </label>
            <br />
            <label>Category:
              <input type="text" name="category" value={newInventoryData.category} onChange={handleInputChange} />
            </label>
            <br />
            <label>Stock Level:
              <input type="number" name="stockLevel" value={newInventoryData.stockLevel} onChange={handleInputChange} />
            </label>
            <br />
            <label>Expiration Date:
              <input type="date" name="expirationDate" value={newInventoryData.expirationDate} onChange={handleInputChange} />
            </label>
            <br />
            <button type="button" onClick={addNewInventory}>Add Inventory</button>
          </form>
        </div>
      )}
      <ul>
        {inventory.map(item => (
          <li key={item._id}>
            {item.medicationName} - {item.stockLevel} in stock
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryComponent;
