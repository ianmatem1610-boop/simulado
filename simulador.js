//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;

    let disponible = calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);
}

document.getElementById("btnCalcularCredito").addEventListener("click", calcular);