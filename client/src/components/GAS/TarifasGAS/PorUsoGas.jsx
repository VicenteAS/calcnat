import React from 'react'

function PorUsoGas(PG) { 

    return (
    <>
        <td className="td-main">POR USO GAS</td>
        <td><input value={Math.round(PG.data.totalTF * 100)/100} readOnly /><i>€</i></td>
        <td><input value={Math.round(PG.data.totalTV * 100)/100}readOnly /><i>€</i></td>
        <td><input value={Math.round(PG.data.otros * 100)/100} readOnly /><i>€</i></td>
        <td><input value={Math.round(PG.data.impuestos * 100)/100} readOnly/><i>€</i></td>
        <td><input value={Math.round(PG.data.totalTarifa * 100)/100} readOnly/><i>€</i></td> 
    </>       
    )
}

export default PorUsoGas;