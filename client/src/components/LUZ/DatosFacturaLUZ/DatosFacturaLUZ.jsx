import React, {useState} from "react";
import TarifasLUZ from "../TarifasLUZ/TarifasLUZ";

import "./DatosFacturaLUZ.css"

const INITIAL_VALUES = {
    days: '',
    TP1: '',
    TP2 : '',
    alquiler : '0.02663',
    otros : '',
    TE1 : '',
    TE2 : '',
    TE3 : '',
    discTP : '',
    discTE : '',
    IVA : '0',
    impuesto : '0',
}
const DatosFacturaLUZ = () => {
    const [data, setData] = useState(INITIAL_VALUES)
    
    
    const handleData = (e) => {
        setData({...data ,[e.target.name]: e.target.value})
    }
    
    const total = Number(data.TE1) + Number(data.TE2) + Number(data.TE3); 

    return (
        <>
    <div className="home">
        <div className="luz">
            <div className="table-responsive" >
            <h2>LUZ</h2>
            <table className="table table-sm">
            <thead className="table-active">
                    <tr><th>DIAS DE FACTURA</th>
                        <td><input type="text" name="days" onChange={handleData}/></td>
                    </tr>
                    <tr><th>TP1</th>
                        <td><input type="text" name='TP1' onChange={handleData}/></td>
                    </tr>    
                    <tr><th>TP2</th>
                        <td><input type="text" name='TP2' onChange={handleData}/></td>
                    </tr>   
                    <tr><th>ALQUILER CONTADOR</th>
                        <td><input type="text" name='alquiler'  defaultValue='0.02663' onChange={handleData} ></input></td>
                    </tr>  
                    <tr><th>TE P1(PUNTA)</th>
                        <td><input type="text" name='TE1' onChange={handleData}></input></td>
                    </tr> 
                    <tr><th>TE P2(LLANO)</th>
                        <td><input type="text" name='TE2' onChange={handleData} ></input></td>
                    </tr> 
                    <tr><th> TE P3(VALLE)</th>
                        <td><input type="text" name='TE3' onChange={handleData}></input></td>
                    </tr> 
                    <tr><th>TOTAL TE</th>
                        <td><input value={total} readOnly ></input></td>
                    </tr> 
                    <tr><th>DESCUENTO TP</th>
                        <td><input type="text" name='discTP' onChange={handleData} ></input><i>%</i></td>
                    </tr> 
                    <tr><th>DESCUENTO TE</th>
                        <td><input type="text" name='discTE' onChange={handleData}></input><i>%</i></td>
                    </tr> 
                    <tr><th>IVA / IGIC /IPSI</th>
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
                    <tr><th>IMPUESTO ELECTRICO </th>
                        <td>
                            <select name='impuesto' onChange={handleData}>
                                <option >0.00</option>
                                <option >0.50</option>
                                <option >5.00</option>
                                <option >5.11</option>
                            </select>%
                        </td>
                    </tr> 
                    <tr><th>OTROS CONCEPTOS</th><td><input type="text" name='otros' onChange={handleData}></input></td>
                    </tr>  
                </thead>
            </table> 
            </div>
        </div>  
        <div className="results">   
        <TarifasLUZ data={data}/>
        </div> 
    </div>     
    </>
    )
}
export default DatosFacturaLUZ;

