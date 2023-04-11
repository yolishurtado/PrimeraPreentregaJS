let cotizcionA = 0;
let cotizcionB = 0;

let entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Simular Compra Dolares U$S \n 4 - Simular Venta Dolares U$S\n 5 - Simular Compra Euros €\n 6 - Simular Venta Euros €");
while (entrada != "esc") {
    switch (entrada) {
        case "1":
            alert("Cotizacion DOLAR: Compra 391 / Venta 389 *SUJETO A CAMBIO * ");
            break;
        case "2":
            alert("Cotizacion EUROS: Compra 428 / Venta 420 ");
            break;
        case "3": //Cotizacion DOLAR: Compra 391 / Venta 389
            cotizacionA = 391.00;
            monto=prompt("Cuantos Pesos va cambiar a U$S ")
            if(monto > 0){
            alert("Compra U$S "+cotizarD(monto)+"");
            }
            break;
        case "4": 
            cotizacionB = 389;
            monto=prompt("Cuantos U$S desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender U$S "+monto);
            }
            break;
        case "5": //Cotizacion EUROS: Compra 428  / Venta 420
            cotizacionA =  428;
            monto=prompt("Cuantos Pesos va cambiar a € ")
            if(monto > 0){''
            alert("Compra € "+cotizarD(monto)+"");
            }
            break;
        case "6": 
            cotizacionB = 420;
            monto=prompt("Cuantos € desea Vender")
            if(monto > 0){
            alert("Recibe $"+cotizarP(monto)+" al Vender € "+monto);
            }
            break;        
        default:
            alert("Opcion no valida");
            break;
    }
    entrada = prompt(" 1 - Cotizar Dolares (U$S) \n 2 - Cotizar Euros (€)\n 3 - Simular Compra Dolares U$S \n 4 - Simular Venta Dolares U$S\n 5 - Simular Compra Euros €\n 6 - Simular Venta Euros €\n ");
}

function cotizarD(monto) {
    return monto/= cotizacionA
}
function cotizarP(monto) {
    return monto*= cotizacionB
}
