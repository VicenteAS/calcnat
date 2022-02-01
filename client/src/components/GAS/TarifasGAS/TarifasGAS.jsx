import React, {useEffect, useState} from "react";
import "../../../bootstrap-5.0.0/css/bootstrap.min.css"
import axios from "axios"
import PorUsoGas from "./PorUsoGas";
import DigitalGas from "./DigitalGas";
import "./TarifasGas.css";
import {calculoGAS} from "../../../helpers";
import {GET_POR_USO_GAS , GET_DIGITAL_GAS} from "../../../utils/utils"



function TarifasGAS({data}) {

  // POR USO GAS "PUG"

    const [pricePUG, setPricePUG] = useState('');

    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_POR_USO_GAS).then((response) => {
            setPricePUG(response.data[0])
            });
        } fetchData();    
        },[]);

    const PUG = {
        precio1 : "",
        precio2 : "",
    };

    if (data.peaje === "RL.1") {
        PUG.precio1 = pricePUG.RL1TF
        PUG.precio2 = pricePUG.RL1TV 
    } else if (data.peaje === "RL.2") {
        PUG.precio1 = pricePUG.RL2TF
        PUG.precio2 = pricePUG.RL2TV
    } else if (data.peaje === "RL.3") {
        PUG.precio1 = pricePUG.RL3TF
        PUG.precio2 = pricePUG.RL3TV
    };   
    
    const PG = calculoGAS(PUG.precio1 , PUG.precio2 , data);
    
    

    // Digital gas "DGG"
    

    const [priceDGG , setPriceDGG] = useState('');

    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_DIGITAL_GAS).then((response) => {
            setPriceDGG(response.data[0])
        });
    } fetchData();    
},[]);

    const DGG = {
        precio1 : "" ,
        precio2 : "",
    };

    if (data.peaje === "RL.1") {
        DGG.precio1 = priceDGG.RL1TF
        DGG.precio2 = priceDGG.RL1TV
    } else if (data.peaje === "RL.2") {
        DGG.precio1 = priceDGG.RL2TF
        DGG.precio2 = priceDGG.RL2TV
    } else if (data.peaje === "RL.3") {
        DGG.precio1 = priceDGG.RL3TF
        DGG.precio2 = priceDGG.RL3TV
    };    

    const DG = calculoGAS(DGG.precio1 , DGG.precio2 , data);

    const mejorGas = Math.min(PG.totalTarifa , DG.totalTarifa );


    return (
    <div className="tabla" >
        <h2 className="title">TARIFAS</h2>
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
            <tbody className="bodyresults">
            <tr className={`mejorGas ${mejorGas === PG.totalTarifa && mejorGas!== 0}`}><PorUsoGas data={PG}/></tr>
            <tr className={`mejorGas ${mejorGas === DG.totalTarifa && mejorGas!== 0}`}><DigitalGas data={DG}/></tr>
            </tbody>
            </table>
    </div>
    )
}
export default TarifasGAS;


