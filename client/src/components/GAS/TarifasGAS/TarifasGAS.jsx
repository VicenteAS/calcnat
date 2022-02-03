import React, {useEffect, useState} from "react";
import "../../../bootstrap-5.0.0/css/bootstrap.min.css"
import axios from "axios"
import "./TarifasGas.css";
import {calculoGAS} from "../../../helpers";
import {GET_DATOS_GAS} from "../../../utils/utils"


function TarifasGAS({data}) {

    const [tarifas, setTarifas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_DATOS_GAS).then((response) => {
                setTarifas(response.data)
            
        });
    } fetchData();    
},[]);

    return (
    <div className="tabla" >
        {tarifas.map((gas)=>{

            let preciosGas =  {
                precio1 : "",
                precio2 : "",
            }

            switch (data.peaje) {
                case "RL.1":
                    preciosGas.precio1 = gas.RL1TF;
                    preciosGas.precio2 = gas.RL1TV;
                    break;
                case "RL.2":
                    preciosGas.precio1 = gas.RL2TF;
                    preciosGas.precio2 = gas.RL2TV;
                    break;
                case "RL.3":
                    preciosGas.precio1 = gas.RL3TF;
                    preciosGas.precio2 = gas.RL3TV;
                    break;
                default:
                    break;
            }
            
            let datosGas = calculoGAS(preciosGas.precio1 , preciosGas.precio2 , data); 

            return (
                <table className="table table-sm">
                <thead className="table-active">
                    <tr>
                        <th>TARIFA</th>
                        <th>TOTAL TF</th>
                        <th>TOTAL TV</th>
                        <th>OTROS</th>
                        <th>IMPUESTOS</th>
                        <th>TOTAL TARIFA</th>
                    </tr>
                </thead>
        <td className="td-main">{gas.nombre_tarifa}</td>
                <td><input value={Math.round(datosGas.totalTF * 100)/100}  readOnly /><i>€</i></td>
                <td><input value={Math.round(datosGas.totalTV * 100)/100}readOnly /><i>€</i></td>
                <td><input value={Math.round(datosGas.otros * 100)/100} readOnly /><i>€</i></td>
                <td><input value={Math.round(datosGas.impuestos * 100)/100} readOnly/><i>€</i></td>
                <td><input value={Math.round(datosGas.totalTarifa * 100)/100} readOnly/><i>€</i></td> 
        
        </table>
            )
        })}
    </div>
    )
}
export default TarifasGAS;


