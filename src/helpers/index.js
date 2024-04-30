const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    });
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    //Mientras mayor es la cantidad solicitada menor es el interes
    if(cantidad < 5000){
        total = cantidad * 1.5; // = 50% de interés
    } else if (cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    } else if (cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    } else{
        total = cantidad * 1.2;
    }

    // plazo - mas plazo: mayor interes
    if(plazo === 6){
        total *= 1.1; // Si paga rapido le vamos a cobrar un 10% mas
    } else if(plazo === 12){
        total *= 1.2; // Si tarda 1 año un 20% mas
    } else {
        total *= 1.3; // Si tarda 2 años un 30% mas
    }
    return total;
}

export {
    formatearDinero,
    calcularTotalPagar
}
