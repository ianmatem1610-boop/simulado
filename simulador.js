//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;

    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);

    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText = capacidad.toFixed(2);

    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let plazo = parseInt(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("spnInteresPagar").innerText = interes.toFixed(2);

    let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = total.toFixed(2);





}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);