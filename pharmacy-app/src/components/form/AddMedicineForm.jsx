import React, {useState} from 'react';
import './AddMedicineForm.css';
function  NewMedicine(props) {

    const [data, set] = useState({
        medicationNamw: "",
        
    })

    return(
        <>
        <h4>ADD NEW MEDICINE</h4>
            <form>
                <lebel>Medicine name:
                    <input type="text" placeholder="name" />
                </lebel>
                <lebel>Manufacturer:
                    <input type="text" placeholder="manufacture" />
                </lebel>
                <lebel>Category:
                    <input type="text" placeholder="category" />
                </lebel>
                <lebel>Quantity:
                    <input type="number" placeholder="Quantity" />
                </lebel>
                <lebel>Expiration Date:
                    <input type="date" placeholder="date" />
                </lebel>
                <div class="btn"> 
                    <button type="button">add</button>
                    <button type="button">cancel</button>  
                </div>
            </form>
        </>
    )
    
}
export default NewMedicine