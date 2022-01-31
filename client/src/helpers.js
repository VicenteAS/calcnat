function calculoLUZ(totalTP1, totalTP2,data, precioTP1, precioTP2, precioTE, isNL, priceNL = ""){
    const TP1 = (totalTP1 * precioTP1)
    const TP2 = (totalTP2 * precioTP2) 
    const totalTP = (Number(TP1) + Number(TP2)) / ( 1+ ( data.discTP/100))
    let totalTE = ""; 
    if(isNL){
         totalTE = (((Number(data.TE1) * priceNL.TerminoDeEnergia1)+ (Number(data.TE2) * priceNL.TerminoDeEnergia2 )+  (Number(data.TE3) * priceNL.TerminoDeEnergia3))/ ( 1+ ( data.discTE/100)));
    }else{
        totalTE = (((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTE)/ ( 1+ ( data.discTE/100)));
    }
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

function calculoGAS(precio1, precio2, data) {
    const TF = (precio1 * Number(data.days)) / ( 1+ ( data.discTF/100));
    const TV = (precio2 * Number(data.consumo))/ ( 1+ ( data.discTV/100));
    

    const otros = (((Number(data.alquiler * data.days) * 0.07 ) +(Number(data.alquiler * data.days)) + Number(data.otros)));

    const impuestos =  Number(data.impuesto) * Number(data.consumo);
    const totalTarifa = TF + TV + otros + impuestos ;
    const IVA = totalTarifa * (Number(data.IVA + 100) /100); 
    const totalTarifaIVA = totalTarifa + IVA;
    const OBJ = {
        totalTF : TF ,
        totalTV : TV ,
        otros : otros ,
        impuestos : impuestos ,
        totalTarifa : totalTarifaIVA
    }
    return OBJ;
} 

export  {calculoLUZ , calculoGAS};


