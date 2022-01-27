import React, {useState} from "react";
import Tarifas from "../../LUZ/TarifasLUZ/TarifasLUZ";
import TarifasGAS from "../TarifasGAS/TarifasGAS";


import "./DatosFacturaGAS.css"

const INITIAL_VALUES = {
    days: '',
    peaje: 'RL.1',
    alquiler : '',
    consumo : '',
    discTF : '0',
    discTV : '0',
    IVA : '0',
    impuesto : '0',
    otros : ''
}
const DatosFacturaGAS = () => {
    const [data, setData] = useState(INITIAL_VALUES)
   
    
    const handleData = (e) => {
        setData({...data ,[e.target.name]: e.target.value})
    }
    
    return (
        <>
    <div className="home">
        <div className="gas">
            <div className="table-responsive" >
            <h2>GAS</h2>
            <table className="table table-sm">
                <thead className="table-active">
                    <tr><th>DIAS DE FACTURA</th>
                        <td><input type="text" name="days" onChange={handleData}/></td>
                    </tr>
                    <tr><th>PEAJE DE ACCESO</th>
                        <td>
                            <select name='peaje' onChange={handleData}>
                                <option >RL.1</option>
                                <option >RL.2</option>
                                <option >RL.3</option>
                            </select>
                        </td>
                    </tr>   
                    <tr><th>ALQUILER CONTADOR</th>
                        <td><input type="text" name='alquiler' onChange={handleData}/></td>
                    </tr>   
                    <tr><th>CONSUMO</th>
                        <td><input type="text" name='consumo' onChange={handleData} ></input></td>
                    </tr>  
                    <tr><th>IVA</th>
                        <td>
                            <select name='IVA' onChange={handleData}>
                                <option >0.00</option>
                                <option >3.00</option>
                                <option >7.00</option>
                                <option >10.00</option>
                                <option >21.00</option>
                            </select>%
                        </td>
                    </tr> 
                    <tr><th>IMPUESTOS</th>
                        <td>
                            <select name='impuesto' onChange={handleData}>
                                <option >0.00</option>
                                <option >0.50</option>
                                <option >5.00</option>
                                <option >5.11</option>
                            </select>%
                        </td>
                    </tr>  
                    <tr><th>DESCUENTO TF</th>
                        <td>
                        <input name="discTF" onChange={handleData}></input><i>%</i></td>
                    </tr> 
                    <tr><th>DESCUENTO TV</th>
                        <td> 
                        <input name="discTV" onChange={handleData}></input><i>%</i></td>
                    </tr> 
                    <tr><th>OTROS CONCEPTOS</th><td><input type="text" name='otros' onChange={handleData}></input></td>
                    </tr>  
                </thead>
            </table> 
            </div>
        </div>  
        <div className="results">   
        <TarifasGAS data={data}/>
        </div> 
    </div>     
    </>
    )
}
export default DatosFacturaGAS;

