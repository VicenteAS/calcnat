import React from 'react'

function Iberdrola({data}) {
    return (
        <>
        <td className="td-main">Iberdrola</td>
        <td><input value={Math.round(data.totalTP * 100)/100} readOnly></input><i>€</i></td>
        <td><input value={Math.round(data.totalTE * 100)/100} readOnly></input><i>€</i></td>
        <td><input value={Math.round(data.otros * 100)/100} readOnly></input><i>€</i></td>
        <td><input value={Math.round(data.impuestos * 100)/100}  readOnly/><i>€</i></td>
        <td><input value={Math.round(data.totalTarifa * 100)/100} readOnly/><i>€</i></td>
</>     
    )
}

export default Iberdrola;