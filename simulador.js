function validarFormulario() {
    document.querySelectorAll(".error-msg").forEach(el => el.remove());
    document.querySelectorAll("input").forEach(el => el.style.borderColor = "rgba(255, 255, 255, 0.1)");

    let esValido = true;

    // Validación de ingresos y los nuevos 3 campos de gastos
    let campos = ["txtIngresos", "txtArriendo", "txtAlimentacion", "txtVarios", "txtMonto", "txtPlazo", "txtTasaInteres"];
    
    campos.forEach(id => {
        let valor = parseFloat(document.getElementById(id).value);
        if (isNaN(valor) || valor < 0) {
            mostrarError(id, "Dato inválido");
            esValido = false;
        }
    });

    return esValido;
}

function calcular() {
    if (!validarFormulario()) return; 

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    // Captura de nuevos campos
    let arriendo = parseFloat(document.getElementById("txtArriendo").value);
    let alimentacion = parseFloat(document.getElementById("txtAlimentacion").value);
    let varios = parseFloat(document.getElementById("txtVarios").value);
    
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    // Cálculos aplicando la nueva suma de gastos
    let totalGastos = calcularTotalGastos(arriendo, alimentacion, varios);
    let disponible = calcularDisponible(ingresos, totalGastos);
    let capacidad = calcularCapacidadPago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazo);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);
    let aprobado = aprobarCredito(capacidad, cuota);

    // Mostrar resultados (Punto 3 y 4)
    document.getElementById("spnTotalGastos").innerText = totalGastos.toFixed(2);
    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);
    document.getElementById("spnCapacidadPago").innerText = capacidad.toFixed(2);
    document.getElementById("spnInteresPagar").innerText = interes.toFixed(2);
    document.getElementById("spnTotalPrestamo").innerText = total.toFixed(2);
    document.getElementById("spnCuotaMensual").innerText = cuota.toFixed(2);

    let estado = document.getElementById("spnEstadoCredito");
    if (aprobado) {
        estado.innerText = "CRÉDITO APROBADO";
        estado.style.color = "#00f2fe";
    } else {
        estado.innerText = "CRÉDITO RECHAZADO";
        estado.style.color = "#ff4d4d";
    }
}