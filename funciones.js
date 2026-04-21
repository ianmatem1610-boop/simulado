// AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

// Punto 3: Suma de los tres campos de gastos
function calcularTotalGastos(arriendo, alimentacion, varios) {
    return arriendo + alimentacion + varios;
}

function calcularDisponible(ingresos, totalGastos) {
    let disponible = ingresos - totalGastos;
    if (disponible < 0) {
        return 0;
    }
    return disponible;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return monto * (tasa / 100) * plazoAnios;
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 100;
}

function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    return total / meses;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago >= cuotaMensual;
}