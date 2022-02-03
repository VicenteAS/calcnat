function calculoLUZ(totalTP1, totalTP2,data, precioTP1, precioTP2, TE1, TE2 , TE3){
    // TP
   /*  console.log(totalTP1);
    console.log(totalTP2);
    console.log(precioTP1);*/
 
    if(precioTP1 === null || precioTP1 === undefined){
        precioTP1 = 0;
    }
    if(precioTP2 === null || precioTP2 === undefined){
        precioTP2 = 0;
    }
 
    const TP1 = (totalTP1 * precioTP1)
    const TP2 = (totalTP2 * precioTP2) 
    const totalTP = (Number(TP1) + Number(TP2)) / ( 1+ ( data.discTP/100))
    console.log(data);
    let totalTE
    if( TE2 === null || TE2 === undefined || TE3 === null || TE3 === undefined){
    
    totalTE = ((((Number(data.TE1) + Number(data.TE2) + Number(data.TE3)) * TE1))/ ( 1+ ( data.discTE/100))); 

    } else {

        totalTE = ((Number(data.TE1) * TE1) + (Number(data.TE2) * TE2) + (Number(data.TE3) * TE3)/ ( 1+ ( data.discTE/100)))
    }


    console.log(totalTE)


    // Otros conceptos (alquiler)
    const impuestos = (totalTP + totalTE) * Number(data.impuesto/100);
    const otros = (Number(data.alquiler * data.days) + Number(data.otros));

    const totalTarifa = totalTP + totalTE + otros + impuestos;
    //IVA
    const IVA = totalTarifa * Number(data.IVA) /100;
    //Total tarifa
    const totalTarifaIVA = totalTarifa + IVA;
    //OBJ que retorna
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
    //OBJ que retorna 
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


