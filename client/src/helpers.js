function calculoLUZ(totalTP1, totalTP2,data, precioTP1, precioTP2, precioTE, isNL, priceNL = ""){
    // TP
    const TP1 = (totalTP1 * precioTP1)
    const TP2 = (totalTP2 * precioTP2) 
    const totalTP = (Number(TP1) + Number(TP2)) / ( 1+ ( data.discTP/100))

    // TE
    let totalTE = ""; 
    if(isNL){
         totalTE = (((Number(data.TE1) * priceNL.TerminoDeEnergia1)+ (Number(data.TE2) * priceNL.TerminoDeEnergia2 )+  (Number(data.TE3) * priceNL.TerminoDeEnergia3))/ ( 1+ ( data.discTE/100)));
    }else{
        totalTE = (((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTE)/ ( 1+ ( data.discTE/100)));
    }

    // Otros conceptos (alquiler)
    const impuestos = (totalTP + totalTE) * Number(data.impuesto/100);
    const otros = (Number(data.alquiler * data.days) + Number(data.otros));
    const totalTarifa = totalTP + totalTE + otros + impuestos;
    const IVA = totalTarifa * Number(data.IVA) /100;
    const totalTarifaIVA = totalTarifa + IVA;
    const OBJ = {
        totalTP : totalTP,
        totalTE : totalTE,
        otros : otros,
        impuestos : IVA + impuestos,
        totalTarifa : totalTarifaIVA,
    }
    return OBJ;
}

function calculoGAS(precio1,precio2 , data) {

    // TF
    const TF = (precio1 * Number(data.days)) / ( 1+ ( data.discTF/100));

    //TV
    const TV = (precio2 * Number(data.consumo))/ ( 1+ ( data.discTV/100));

    //IMPUESTOS HC
    const impuestosHC =  Number(data.impuesto) * Number(data.consumo);

    //Otros conceptos (alquiler)
    const alquiler = (Number(data.alquiler * data.days));
    const otros = alquiler + (Number(data.otros))
    //IMPUESTOS
    const impuestosHCIva = (impuestosHC * Number(data.IVA)/100);
    const iva = (Number(data.IVA)/100 * (Number(TF)+Number(TV)));
    const alquilerIva = alquiler * (Number(data.ivaAlquiler)/100);
    //IVA total
    const IVA = impuestosHCIva + iva + alquilerIva;
    //total tarifa
    const totaltarifa= TF + TV + impuestosHC + otros + IVA;

    const OBJ = {
        totalTF : TF ,
        totalTV : TV ,
        impuestos : IVA ,
        otros : otros ,
        totalTarifa : totaltarifa
    }
    return OBJ;
}

export  {calculoLUZ , calculoGAS};


