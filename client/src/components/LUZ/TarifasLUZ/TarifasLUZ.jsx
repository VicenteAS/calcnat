import React, {useEffect, useState} from "react";
import "../../../bootstrap-5.0.0/css/bootstrap.min.css"
import "./TarifasLUZ.css";
import axios from "axios"
import {calculoLUZ} from "../../../helpers";
import { GET_DATOS_LUZ } from "../../../utils/utils";

function TarifasLUZ({data}) {
    const [totalTP1 , setTotalTP1] = useState("");
    const [totalTP2 , setTotalTP2] = useState("");
    

    const [tarifas, setTarifas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_DATOS_LUZ).then((response) => {
                setTarifas(response.data)
                const calc1 = (Number(data.days) * Number(data.TP1))
                const calc2 = (Number(data.days) * Number(data.TP2))
                setTotalTP1(calc1)
                setTotalTP2(calc2)
            });
        } fetchData();    
    }, [data.days , data.TP1 , data.TP2]);


    /*  
        //MEJOR_TARIFA
        const mejorTarifa = Math.min(NL.totalTarifa,PUL.totalTarifa);
        const mejorCIA = Math.min(END.totalTarifa , IBD.totalTarifa , REP.totalTarifa , HL.totalTarifa ,EN.totalTarifa)
     */
    return (
        <div className="tabla" >
        {tarifas.map((luz)=>{
           
            let datosLuz = calculoLUZ(totalTP1,totalTP2,data,luz.TP1, luz.TP2, luz.TE1, luz.TE2 , luz.TE3)
             console.log(datosLuz.totalTE); 
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
        <td className="td-main">{luz.nombre_tarifa}</td>
                <td><input value={Math.round(datosLuz.totalTP * 100)/100}  readOnly /><i>€</i></td>
                <td><input value={Math.round(datosLuz.totalTE * 100)/100}readOnly /><i>€</i></td>
                <td><input value={Math.round(datosLuz.otros * 100)/100} readOnly /><i>€</i></td>
                <td><input value={Math.round(datosLuz.impuestos * 100)/100} readOnly/><i>€</i></td>
                <td><input value={Math.round(datosLuz.totalTarifa * 100)/100} readOnly/><i>€</i></td> 
        </table>
            )
        })}
    </div>
    )
}
export default TarifasLUZ;