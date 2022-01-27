import React from 'react'

function DigitalGas(DG) {
     /*  console.log({DG});   */
    return (
    <>
        <td className="td-main">DIGITAL GAS</td>
        <td><input value={Math.round(DG.data.totalTF * 100)/100} readOnly /><i>€</i></td>
         <td><input value={Math.round(DG.data.totalTV * 100)/100}readOnly /><i>€</i></td>
        <td><input value={Math.round(DG.data.otros * 100)/100} readOnly /><i>€</i></td>
        <td><input value={Math.round(DG.data.impuestos * 100)/100} readOnly/><i>€</i></td>
        <td><input value={Math.round(DG.data.totalTarifa * 100)/100} readOnly/><i>€</i></td> 
    </>       
    )
}

export default DigitalGas;