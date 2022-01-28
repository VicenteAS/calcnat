import React, {useEffect, useState} from "react";
import "../../../bootstrap-5.0.0/css/bootstrap.min.css"
import axios from "axios"
import PorUsoGas from "./PorUsoGas";
import DigitalGas from "./DigitalGas";
import "./TarifasGas.css";

function TarifasGAS({data}) {

    
  // POR USO GAS "PUG"
  
  const [RL1TFPUG , setRL1TFPUG] = useState(''); 
  const [RL2TFPUG , setRL2TFPUG] = useState(''); 
  const [RL3TFPUG , setRL3TFPUG] = useState(''); 
  const [RL1TVPUG , setRL1TVPUG] = useState(''); 
  const [RL2TVPUG , setRL2TVPUG] = useState(''); 
  const [RL3TVPUG , setRL3TVPUG] = useState(''); 

    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/porusogas").then((response) => {
            setRL1TFPUG(response.data[0].RL1TF);
            setRL2TFPUG(response.data[0].RL2TF);
            setRL3TFPUG(response.data[0].RL3TF);
            setRL1TVPUG(response.data[0].RL1TV);
            setRL2TVPUG(response.data[0].RL2TV);
            setRL3TVPUG(response.data[0].RL3TV);
            });
        } fetchData();    
        },[]);

    const PUG = {
        Precio1 : "",
        Precio2 : "",
        otros : "",
        impuestos : "",
        total : "",
    };

    if (data.peaje === "RL.1") {
        PUG.Precio1 = RL1TFPUG
        PUG.Precio2 = RL1TVPUG 
    } else if (data.peaje === "RL.2") {
        PUG.Precio1 = RL2TFPUG
        PUG.Precio2 = RL2TVPUG
    } else if (data.peaje === "RL.3") {
        PUG.Precio1 = RL3TFPUG
        PUG.Precio2 = RL3TVPUG
    };   
    const TFPG = (PUG.Precio1 * Number(data.days)) / ( 1+ ( data.discTF/100));
    const TVPG = PUG.Precio2 * Number(data.consumo)/ ( 1+ ( data.discTV/100));
    const otros = (Number(data.alquiler * data.days) + Number(data.otros));
    const impuestosPUG =  Number(data.impuesto) * Number(data.consumo);
    const totalTarifaPUG = TFPG + TVPG + otros + impuestosPUG ;
    const IVAPUG = totalTarifaPUG * Number(data.IVA) /100; 
    const totalTarifaPUGIVA = totalTarifaPUG + IVAPUG;
    const PG = {
        totalTF : TFPG ,
        totalTV : TVPG ,
        otros : otros ,
        impuestos : impuestosPUG + IVAPUG,
        totalTarifa : totalTarifaPUGIVA
    }
    

    // Digital gas "DGG"
    

    const [priceDGG , setPriceDGG] = useState('');
  
    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/digitalgas").then((response) => {
            setPriceDGG(response.data[0])
        });
    } fetchData();    
},[]);

    const DGG = {
        Precio1 : "" ,
        Precio2 : "",
    };

    if (data.peaje === "RL.1") {
        DGG.Precio1 = priceDGG.RL1TF
        DGG.Precio2 = priceDGG.RL1TV
    } else if (data.peaje === "RL.2") {
        DGG.Precio1 = priceDGG.RL2TF
        DGG.Precio2 = priceDGG.RL2TV
    } else if (data.peaje === "RL.3") {
        DGG.Precio1 = priceDGG.RL3TF
        DGG.Precio2 = priceDGG.RL3TV
    };    
    
    const TFDG = DGG.Precio1 * Number(data.days);
    const TVDG = DGG.Precio2 * Number(data.consumo);
    const impuestosDGG =  Number(data.impuesto) * Number(data.consumo);
    const totalTarifaDGG = TFDG + TVDG + otros + impuestosDGG ;
    const IVADGG = totalTarifaDGG * Number(data.IVA) /100; 
    const totalTarifaDGGIVA = totalTarifaDGG + IVADGG;
    
    const DG = {
        totalTF : TFDG ,
        totalTV : TVDG ,
        otros : otros ,
        impuestos : impuestosDGG + IVADGG,
        totalTarifa : totalTarifaDGGIVA
    }

    const mejorGas = Math.min(totalTarifaPUGIVA , totalTarifaDGGIVA );


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
            <tr className={`mejorGas ${mejorGas === totalTarifaPUGIVA && mejorGas!== 0}`}><PorUsoGas data={PG}/></tr>
            <tr className={`mejorGas ${mejorGas === totalTarifaDGGIVA && mejorGas!== 0}`}><DigitalGas data={DG}/></tr>
            </tbody>
            </table>
    </div>
    )
}
export default TarifasGAS;

