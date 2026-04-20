// Función para mostrar errores debajo de los inputs
function mostrarError(idInput, mensaje) {
    let input = document.getElementById(idInput);
    let errorSpan = document.createElement("span");
    errorSpan.className = "error-msg";
    errorSpan.innerText = mensaje;
    
    // Estilos para el mensaje
    errorSpan.style.color = "#ff4d4d";
    errorSpan.style.fontSize = "12px";
    errorSpan.style.display = "block";
    errorSpan.style.marginTop = "5px";
    errorSpan.style.fontWeight = "bold";
    
    input.insertAdjacentElement("afterend", errorSpan);
    input.style.borderColor = "#ff4d4d";
}

function validarFormulario() {
    // Limpiar errores previos
    document.querySelectorAll(".error-msg").forEach(el => el.remove());
    document.querySelectorAll("input").forEach(el => el.style.borderColor = "rgba(255, 255, 255, 0.1)");

    let esValido = true;

    // Obtener valores de los campos
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    // Validaciones
    if (isNaN(ingresos) || ingresos <= 0) {
        mostrarError("txtIngresos", "Ingresa ingresos válidos");
        esValido = false;
    }
    if (isNaN(egresos) || egresos < 0) {
        mostrarError("txtEgresos", "Ingresa egresos válidos");
        esValido = false;
    }
    if (isNaN(monto) || monto < 100) {
        mostrarError("txtMonto", "Monto mínimo $100");
        esValido = false;
    }
    if (isNaN(plazo) || plazo < 1) {
        mostrarError("txtPlazo", "Mínimo 1 año");
        esValido = false;
    }
    if (isNaN(tasa) || tasa <= 0) {
        mostrarError("txtTasaInteres", "Ingresa una tasa válida");
        esValido = false;
    }

    return esValido;
}

function calcular() {
    console.log("Intentando calcular..."); // Si ves esto en consola, el botón funciona
    
    if (!validarFormulario()) {
        console.log("Validación fallida");
        return; 
    }

    // Si pasa la validación, procedemos
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let disponible = calcularDisponible(ingresos, egresos);
    let capacidad = calcularCapacidadPago(disponible);
    let interes = calcularInteresSimple(monto, tasa, plazo);
    let total = calcularTotalPagar(monto, interes);
    let cuota = calcularCuotaMensual(total, plazo);
    let aprobado = aprobarCredito(capacidad, cuota);

    // Mostrar resultados
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

// ASIGNACIÓN DE EVENTOS (Solo una vez)
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCalcularCredito").onclick = calcular;
    document.getElementById("btnReiniciar").onclick = function() {
        location.reload();
    };
});