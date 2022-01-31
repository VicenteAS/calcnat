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
import {calculoLUZ} from "../../../helpers";
import {GET_POR_USO_LUZ , GET_NOCHE_LUZ , GET_COMPROMISO, GET_ENDESA, GET_IBERDROLA, GET_REPSOL, GET_HOLA_LUZ, GET_TOTAL_ENERGIES} from "../../../utils/utils";

function TarifasLUZ({data}) {
    const [totalTP1 , setTotalTP1] = useState("");
    const [totalTP2 , setTotalTP2] = useState("");

  // POR USO LUZ "PUL"

    const [pricePUL ,setPricePUL] = useState(""); 

    useEffect(() => {
        async function fetchData() {
                await axios.get(GET_POR_USO_LUZ).then((response) => {
                    setPricePUL(response.data[0])
                    });
        }
        fetchData();
        }, [])

        const PUL = calculoLUZ(totalTP1, totalTP2, data, pricePUL.TerminoDePotencia1, pricePUL.TerminoDePotencia2, pricePUL.TerminoDeEnergia1);

    // NOCHE LUZ "NL"

    const [priceNL ,setPriceNL] = useState("");


    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_NOCHE_LUZ).then((response) => {
                    setPriceNL(response.data[0]);
                    });
                }        
                fetchData();        
        },[]);

        const NL = calculoLUZ(totalTP1, totalTP2, data, priceNL.TerminoDePotencia1, priceNL.TerminoDePotencia2, priceNL.TerminoDeEnergia1, true, priceNL);
    //COMPROMISO "COM" 


    const [priceCOM , setPriceCOM] = useState(""); 

    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_COMPROMISO).then((response) => {
            setPriceCOM(response.data[0])
            });
        } fetchData();    
        },[]);

        const COM = calculoLUZ(totalTP1, totalTP2, data, priceCOM.TerminoDePotencia1, priceCOM.TerminoDePotencia2, priceCOM.TerminoDeEnergia1);


    //
    useEffect(() => {
        const calc1 = (Number(data.days) * Number(data.TP1))
        const calc2 = (Number(data.days) * Number(data.TP2))
        setTotalTP1(calc1)
        setTotalTP2(calc2)
    }, [data.days , data.TP1 , data.TP2]) 


    //ENDESA "END"


    const [priceEND ,setPriceEND] = useState("");
   
    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_ENDESA).then((response) => {
            setPriceEND(response.data[0])
            });
        } fetchData();    
        },[]);

        const END = calculoLUZ(totalTP1, totalTP2, data, priceEND.TerminoDePotencia1, priceEND.TerminoDePotencia2, priceEND.TerminoDeEnergia1);


    //Iberdrola "IBD"

    const [priceIBD ,setPreiceIBD] = useState("");
   
    useEffect(() => {
        async function fetchData() {
            await axios.get(GET_IBERDROLA).then((response) => {

            setPreiceIBD(response.data[0])
            });
        } fetchData();    
        },[]);

        const IBD = calculoLUZ(totalTP1, totalTP2, data, priceIBD.TerminoDePotencia1, priceIBD.TerminoDePotencia2, priceIBD.TerminoDeEnergia1);

    //Repsol "REP"


        const [priceREP ,setPriceREP] = useState(""); 
        useEffect(() => {
            async function fetchData() {
                await axios.get(GET_REPSOL).then((response) => {

                setPriceREP(response.data[0])
                });
            } fetchData();    
            },[]);
    
            const REP = calculoLUZ(totalTP1, totalTP2, data, priceREP.TerminoDePotencia1, priceREP.TerminoDePotencia2, priceREP.TerminoDeEnergia1);


    // Hola Luz "HL"
    
        const [priceHL , setPriceHL] = useState("");

        useEffect(() => {
            async function fetchData() {
                await axios.get(GET_HOLA_LUZ).then((response) => {
                setPriceHL(response.data[0]);
                });
            } fetchData();    
            },[]);
    
            const HL = calculoLUZ(totalTP1, totalTP2, data, priceHL.TerminoDePotencia1, priceHL.TerminoDePotencia2, priceHL.TerminoDeEnergia1);

    // TotalEnergies "EN"     
    
            const [priceEN , setPriceEN] = useState("");

         useEffect(() => {
            async function fetchData() {
                await axios.get(GET_TOTAL_ENERGIES).then((response) => {
                    setPriceEN(response.data[0]);
                });
            } fetchData();    
            },[]);
    
            const EN = calculoLUZ(totalTP1, totalTP2, data, priceEN.TerminoDePotencia1, priceEN.TerminoDePotencia2, priceEN.TerminoDeEnergia1);

        
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