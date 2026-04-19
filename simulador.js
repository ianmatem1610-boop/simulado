//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
let disponible = calcularDisponible(ingresos, egresos);
document.getElementById("spnDisponible").innerText = disponible.toFixed(2);