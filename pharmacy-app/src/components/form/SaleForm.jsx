import React, {useState} from 'react';

function SaleForm(){
    return(
        <>
            <h4>SALE ODER</h4>
            <form>
            <label>Medicine name: <input type="text" placeholder="name" /></label>
            <label>Quantity:<input type="number" placeholder="Quantity" /></label>
            <label>Price:total price</label>
            <label><button type="button">add</button></label>
            <label><button type="button">remove</button></label>
        </form>
        </>
    )
}

export default SaleForm;