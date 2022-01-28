function calculoLUZ(totalTP1, totalTP2,data, precioTP1, precioTP2, precioTE, isNL, priceNL = ""){
    const TP1 = (totalTP1 * precioTP1)
    const TP2 = (totalTP2 * precioTP2) 
    const totalTP = (Number(TP1) + Number(TP2))
    let totalTE = ""; 
    if(isNL){
         totalTE = ((Number(data.TE1) * priceNL.TerminoDeEnergia1)+ (Number(data.TE2) * priceNL.TerminoDeEnergia2 )+  (Number(data.TE3) * priceNL.TerminoDeEnergia3));
    }else{
        totalTE = ((Number(data.TE1) + Number(data.TE2) + Number(data.TE3))* precioTE);
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

export default calculoLUZ;