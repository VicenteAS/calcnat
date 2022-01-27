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

    /**
     * 
     * @param {string} precioTP1 Precio Termino de Potencia 1
     * @param {string} precioTP2 Precio Termino de Potencia 2
     * @param {string} precioTE Precio Termino de Energia 
     * @returns 
     */
    function calculoAgrupado(precioTP1, precioTP2, precioTE){
        const TP1 = (totalTP1 * precioTP1)
        const TP2 = (totalTP2 * precioTP2) 
        const totalTP = (Number(TP1) + Number(TP2)) 
        const totalTE = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTE);
        const impuestos = (totalTP + totalTE) * Number(data.impuesto/100);
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


    const TP1PUL = (totalTP1 * precioTP1PUL)
    const TP2PUL = (totalTP2 * precioTP2PUL) 
    const totalTPPUL = (Number(TP1PUL) + Number(TP2PUL)) / ( 1+ ( data.discTP/100))
    const totalTEPUL = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTEPUL) / ( 1+ ( data.discTE/100));
    const otros = (Number(data.alquiler * data.days) + Number(data.otros));
    const impuestosPUL = (totalTPPUL + totalTEPUL) * Number(data.impuesto/100);
    const totalTarifaPUL = totalTPPUL + totalTEPUL + otros + impuestosPUL;
    const IVAPUL = totalTarifaPUL * Number(data.IVA) /100;
    const totalTarifaPULIVA = totalTarifaPUL + IVAPUL;

    const PUL = {
        totalTP : totalTPPUL,
        totalTE : totalTEPUL,
        otros : otros,
        impuestos : impuestosPUL + IVAPUL,
        totalTarifa : totalTarifaPULIVA,
    }

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
    const totalTPNL = ((Number(TP1NL) + Number(TP2NL)) / ( 1+ ( data.discTP/100)));
    const totalTENL =  (((Number(data.TE1) * precioTE1NL ) + (Number(data.TE2)* precioTE2NL )+ (Number(data.TE3)* precioTE3NL)) / ( 1+ ( data.discTE/100)));
    const impuestosNL = (totalTPNL + totalTENL)  * Number(data.impuesto/100);
    const totalTarifaNL = totalTPNL + totalTENL + otros + impuestosNL;
    const IVANL = totalTarifaNL * Number(data.IVA) /100;
    const totalTarifaNLIVA = totalTarifaNL + IVANL;


    const NL = {
        totalTP : totalTPNL,
        totalTE : totalTENL,
        otros : otros,
        impuestos : impuestosNL + IVANL,
        totalTarifa : totalTarifaNLIVA,
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

      let COM = calculoAgrupado(precioTP1COM, precioTP2COM, precioTECOM);

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

        let END = calculoAgrupado(precioTP1END, precioTP2END, precioTEEND);

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

        let IBD = calculoAgrupado(precioTP1IBD, precioTP2IBD, precioTEIBD);

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
    
            const TP1REP = (totalTP1 * precioTP1REP)
            const TP2REP = (totalTP2 * precioTP2REP) 
            const totalTPREP = (Number(TP1REP) + Number(TP2REP)) 
            const totalTEREP = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTEREP);
            const impuestosREP = (totalTPREP + totalTEREP) * Number(data.impuesto/100);
            const totalTarifaREP = totalTPREP + totalTEREP + otros + impuestosREP;
            const IVAREP = totalTarifaREP * Number(data.IVA) /100;
            const totalTarifaREPIVA = totalTarifaREP + IVAREP;
        
            const REP = {
                id : 1,
                totalTP : totalTPREP,
                totalTE : totalTEREP,
                otros : otros,
                impuestos : impuestosREP + IVAREP,
                totalTarifa : totalTarifaREPIVA,
            }
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
    
            const TP1HL = (totalTP1 * precioTP1HL)
            const TP2HL = (totalTP2 * precioTP2HL) 
            const totalTPHL = (Number(TP1HL) + Number(TP2HL)) 
            const totalTEHL = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTEHL);
            const impuestosHL = (totalTPHL + totalTEHL) * Number(data.impuesto/100);
            const totalTarifaHL = totalTPHL + totalTEHL + otros + impuestosHL;
            const IVAHL = totalTarifaHL * Number(data.IVA) /100;
            const totalTarifaHLIVA = totalTarifaHL + IVAHL;
        
            const HL = {
                id : 1,
                totalTP : totalTPHL,
                totalTE : totalTEHL,
                otros : otros,
                impuestos : impuestosHL + IVAHL,
                totalTarifa : totalTarifaHLIVA,
            }
    
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
    
            const TP1EN = (totalTP1 * precioTP1EN)
            const TP2EN = (totalTP2 * precioTP2EN) 
            const totalTPEN = (Number(TP1EN) + Number(TP2EN)) 
            const totalTEEN = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTEEN);
            const impuestosEN = (totalTPEN + totalTEEN) * Number(data.impuesto/100);
            const totalTarifaEN = totalTPEN + totalTEEN + otros + impuestosEN;
            const IVAEN = totalTarifaEN * Number(data.IVA) /100;
            const totalTarifaENIVA = totalTarifaEN + IVAEN;
        
            const EN = {
                id : 1,
                totalTP : totalTPEN,
                totalTE : totalTEEN,
                otros : otros,
                impuestos : impuestosEN + IVAEN,
                totalTarifa : totalTarifaENIVA,
            }
        
        //MEJOR_TARIFA
        const mejorTarifa = Math.min(totalTarifaNLIVA,totalTarifaPULIVA,COM.totalTarifa);
        const mejorCIA = Math.min(END.totalTarifa , IBD.totalTarifa , totalTarifaREP , totalTarifaHL ,totalTarifaEN)
    
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
                <tr className={`mejorTarifa ${mejorTarifa === totalTarifaPULIVA && mejorTarifa!== 0}`}><PorUsoLuz data={PUL}/></tr>
                <tr className={`mejorTarifa ${mejorTarifa === totalTarifaNLIVA  && mejorTarifa!== 0}`}><NocheLuz data={NL}/></tr>
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
                <tr className={`mejorCIA ${mejorCIA === totalTarifaREP && mejorCIA!== 0}`}><Repsol data={REP}/></tr>
                <tr className={`mejorCIA ${mejorCIA === totalTarifaHL  && mejorCIA!== 0}`}><HolaLuz data={HL}/></tr>
                <tr className={`mejorCIA ${mejorCIA === totalTarifaEN  && mejorCIA!== 0}`}><TotalEnergies data={EN}/></tr>
                </tbody>
            </table>
        </div>
    </>
    )
}
export default TarifasLUZ;