import React, {useEffect, useState} from "react";
import "../../../bootstrap-5.0.0/css/bootstrap.min.css"
import PorUsoLuz from "./PorUsoLuz";
import NocheLuz from "./NocheLuz";
import Compromiso from "./Compromiso";
import "./TarifasLUZ.css";
import axios from "axios"
import Endesa from "./CIAS/Endesa";
import Iberdrola from "./CIAS/Iberdrola";
import Repsol from "./CIAS/Repsol";
import HolaLuz from "./CIAS/HolaLuz";
import TotalEnergies from "./CIAS/TotalEnergies";

function TarifasLUZ({data}) {
    const [totalTP1 , setTotalTP1] = useState("");
    const [totalTP2 , setTotalTP2] = useState("");

    function calculoAgrupado(precioTP1, precioTP2, precioTE){
        const TP1 = (totalTP1 * precioTP1)
        const TP2 = (totalTP2 * precioTP2) 
        const totalTP = (Number(TP1) + Number(TP2)) 
        const totalTE = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTE);
        const impuestos = (totalTP + totalTE) * Number(data.impuesto/100);
        const otros = (Number(data.alquiler * data.days) + Number(data.otros));
        const totalTarifa = totalTP + totalTE + otros + impuestos;
        const IVA = totalTarifa * Number(data.IVA) /100;
        const totalTarifaIVA = totalTarifa + IVA;
        const OBJ = {
            totalTP : totalTP,
            totalTE : totalTE,
            otros : otros,
            impuestos : impuestos + IVA,
            totalTarifa : totalTarifaIVA,
        }

        return OBJ;
    }

  // POR USO LUZ "PUL"

    const [precioTP1PUL ,setPrecioTP1PUL] = useState(""); 
    const [precioTP2PUL ,setPrecioTP2PUL] = useState(""); 
    const [precioTEPUL ,setPrecioTEPUL] = useState(""); 

    useEffect(() => {
        async function fetchData() {
                await axios.get("http://172.86.8.130:3001/api/porusoluz").then((response) => {
                    setPrecioTP1PUL(response.data[0].TerminoDePotencia1);
                    setPrecioTP2PUL(response.data[0].TerminoDePotencia2);
                    setPrecioTEPUL(response.data[0].TerminoDeEnergia1);
                    });
        }
        fetchData();
        }, [])

        const PUL = calculoAgrupado(precioTP1PUL, precioTP2PUL, precioTEPUL);


    // NOCHE LUZ "NL"
    const [precioTP1NL ,setPrecioTP1NL] = useState(""); 
    const [precioTP2NL ,setPrecioTP2NL] = useState(""); 
    const [precioTE1NL ,setPrecioTE1NL] = useState(""); 
    const [precioTE2NL ,setPrecioTE2NL] = useState(""); 
    const [precioTE3NL ,setPrecioTE3NL] = useState(""); 

    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/nocheluz").then((response) => {
                    setPrecioTP1NL(response.data[0].TerminoDePotencia1);
                    setPrecioTP2NL(response.data[0].TerminoDePotencia2);
                    setPrecioTE1NL(response.data[0].TerminoDeEnergia1);
                    setPrecioTE2NL(response.data[0].TerminoDeEnergia2);
                    setPrecioTE3NL(response.data[0].TerminoDeEnergia3);
                    });
                }        
                fetchData();        
        },[]);

        const TP1NL = (totalTP1 * precioTP1NL)
        const TP2NL = (totalTP2 * precioTP2NL) 
        const totalTP = (Number(TP1NL) + Number(TP2NL)) 
        const totalTE = ((Number(data.TE1) * precioTE1NL)+ (Number(data.TE2) * precioTE2NL )+  (Number(data.TE3) * precioTE3NL));
        const impuestos = (totalTP + totalTE) * Number(data.impuesto/100);
        const otros = (Number(data.alquiler * data.days) + Number(data.otros));
        const totalTarifa = totalTP + totalTE + otros + impuestos;
        const IVA = totalTarifa * Number(data.IVA) /100;
        const totalTarifaIVA = totalTarifa + IVA;
        const NL = {
            totalTP : totalTP,
            totalTE : totalTE,
            otros : otros,
            impuestos : impuestos + IVA,
            totalTarifa : totalTarifaIVA,
        }

        

    //COMPROMISO "COM" 

    const [precioTP1COM ,setPrecioTP1COM] = useState(""); 
    const [precioTP2COM ,setPrecioTP2COM] = useState(""); 
    const [precioTECOM ,setPrecioTECOM] = useState(""); 

  

    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/compromiso").then((response) => {
            setPrecioTP1COM(response.data[0].TerminoDePotencia1);
            setPrecioTP2COM(response.data[0].TerminoDePotencia2);
            setPrecioTECOM(response.data[0].TerminoDeEnergia1);
            });
        } fetchData();    
        },[]);

      const COM = calculoAgrupado(precioTP1COM, precioTP2COM, precioTECOM);

    //
    useEffect(() => {
        const calc1 = (Number(data.days) * Number(data.TP1))
        const calc2 = (Number(data.days) * Number(data.TP2))
        setTotalTP1(calc1)
        setTotalTP2(calc2)
    }, [data.days , data.TP1 , data.TP2]) 


    //ENDESA "END"

    const [precioTP1END ,setPrecioTP1END] = useState(""); 
    const [precioTP2END ,setPrecioTP2END] = useState(""); 
    const [precioTEEND ,setPrecioTEEND] = useState(""); 
   
    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/endesa").then((response) => {
            setPrecioTP1END(response.data[0].TerminoDePotencia1);
            setPrecioTP2END(response.data[0].TerminoDePotencia2);
            setPrecioTEEND(response.data[0].TerminoDeEnergia1);
            });
        } fetchData();    
        },[]);

        const END = calculoAgrupado(precioTP1END, precioTP2END, precioTEEND);

    //Iberdrola "IBD"

    const [precioTP1IBD ,setPrecioTP1IBD] = useState(""); 
    const [precioTP2IBD ,setPrecioTP2IBD] = useState(""); 
    const [precioTEIBD ,setPrecioTEIBD] = useState(""); 
   
    useEffect(() => {
        async function fetchData() {
            await axios.get("http://172.86.8.130:3001/api/iberdrola").then((response) => {
            setPrecioTP1IBD(response.data[0].TerminoDePotencia1);
            setPrecioTP2IBD(response.data[0].TerminoDePotencia2);
            setPrecioTEIBD(response.data[0].TerminoDeEnergia1);
            });
        } fetchData();    
        },[]);

        const IBD = calculoAgrupado(precioTP1IBD, precioTP2IBD, precioTEIBD);

    //Repsol "REP"

        const [precioTP1REP ,setPrecioTP1REP] = useState(""); 
        const [precioTP2REP ,setPrecioTP2REP] = useState(""); 
        const [precioTEREP ,setPrecioTEREP] = useState(""); 
       
        useEffect(() => {
            async function fetchData() {
                await axios.get("http://172.86.8.130:3001/api/repsol").then((response) => {
                setPrecioTP1REP(response.data[0].TerminoDePotencia1);
                setPrecioTP2REP(response.data[0].TerminoDePotencia2);
                setPrecioTEREP(response.data[0].TerminoDeEnergia1);
                });
            } fetchData();    
            },[]);
    
            const REP = calculoAgrupado(precioTP1REP, precioTP2REP, precioTEREP);

    // Hola Luz "HL"
    

        const [precioTP1HL ,setPrecioTP1HL] = useState(""); 
        const [precioTP2HL ,setPrecioTP2HL] = useState(""); 
        const [precioTEHL ,setPrecioTEHL] = useState(""); 

        useEffect(() => {
            async function fetchData() {
                await axios.get("http://172.86.8.130:3001/api/holaluz").then((response) => {
                setPrecioTP1HL(response.data[0].TerminoDePotencia1);
                setPrecioTP2HL(response.data[0].TerminoDePotencia2);
                setPrecioTEHL(response.data[0].TerminoDeEnergia1);
                });
            } fetchData();    
            },[]);
    
            const HL = calculoAgrupado(precioTP1HL, precioTP2HL, precioTEHL);
    
    // TotalEnergies "EN"     
    


        const [precioTP1EN ,setPrecioTP1EN] = useState(""); 
        const [precioTP2EN ,setPrecioTP2EN] = useState(""); 
        const [precioTEEN ,setPrecioTEEN] = useState(""); 

        useEffect(() => {
            async function fetchData() {
                await axios.get("http://172.86.8.130:3001/api/totalenergies").then((response) => {
                setPrecioTP1EN(response.data[0].TerminoDePotencia1);
                setPrecioTP2EN(response.data[0].TerminoDePotencia2);
                setPrecioTEEN(response.data[0].TerminoDeEnergia1);
                });
            } fetchData();    
            },[]);
    
            const EN = calculoAgrupado(precioTP1EN, precioTP2EN, precioTEEN);
        
        //MEJOR_TARIFA
        const mejorTarifa = Math.min(NL.totalTarifa,PUL.totalTarifaPUL,COM.totalTarifa);
        const mejorCIA = Math.min(END.totalTarifa , IBD.totalTarifa , REP.totalTarifa , HL.totalTarifa ,EN.totalTarifa)
    
    return (
    <>
        <div className="tabla" >
        <h2 className="title">TARIFAS</h2>
        <table className="table table-sm">
        <thead className="table-active">
            <tr>
                <th>TARIFA</th>
                <th>TOTAL TP</th>
                <th>TOTAL TE</th>
                <th>OTROS</th>
                <th>IMPUESTOS</th>
                <th>TOTAL TARIFA</th>
            </tr>
        </thead>
            <tbody className="bodyresults">
                <tr className={`mejorTarifa ${mejorTarifa === PUL.totalTarifa && mejorTarifa!== 0}`}><PorUsoLuz data={PUL}/></tr>
                <tr className={`mejorTarifa ${mejorTarifa === NL.totalTarifa  && mejorTarifa!== 0}`}><NocheLuz data={NL}/></tr>
                <tr className={`mejorTarifa ${mejorTarifa === COM.totalTarifa  && mejorTarifa!== 0}`}><Compromiso data={COM}/></tr>
            </tbody>
            </table>
        <h2 className="title">COMPETENCIAS</h2>
        <table className="table table-sm">
        <thead className="table-active">
            <tr>
                <th>TARIFA</th>
                <th>TOTAL TP</th>
                <th>TOTAL TE</th>
                <th>OTROS</th>
                <th>IMPUESTOS</th>
                <th>TOTAL TARIFA</th>
            </tr>
        </thead>   
        <tbody className="bodyresults">     
                <tr className={`mejorCIA ${mejorCIA === END.totalTarifa && mejorCIA!== 0}`}><Endesa data={END}/></tr>
                <tr className={`mejorCIA ${mejorCIA === IBD.totalTarifa  && mejorCIA!== 0}`}><Iberdrola data={IBD}/></tr>
                <tr className={`mejorCIA ${mejorCIA === REP.totalTarifa && mejorCIA!== 0}`}><Repsol data={REP}/></tr>
                <tr className={`mejorCIA ${mejorCIA === HL.totalTarifa  && mejorCIA!== 0}`}><HolaLuz data={HL}/></tr>
                <tr className={`mejorCIA ${mejorCIA === EN.totalTarifa  && mejorCIA!== 0}`}><TotalEnergies data={EN}/></tr>
                </tbody>
            </table>
        </div>
    </>
    )
}
export default TarifasLUZ;