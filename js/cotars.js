// Función para formatear los valores en formato financiero
function formatearValorFinanciero(valor) {
    return valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Función para calcular los montos de cada ítem (Gráfica, Reel, etc.)
function calcularMontos() {
    const calcularMonto = (cantidadId, precioId) => {
        const cantidad = parseFloat(document.getElementById(cantidadId).value) || 0;
        const precioUnitario = parseFloat(document.getElementById(precioId).value) || 0;
        return cantidad * precioUnitario;
    };

    const montoGrafica = calcularMonto('cantidad-grafica', 'precio-unitario-grafica');
    const montoReel = calcularMonto('cantidad-reel', 'precio-unitario-reel');
    const montoInfluencer = calcularMonto('cantidad-influencer', 'precio-unitario-influencer');
    const montoLocutora = calcularMonto('cantidad-locutora', 'precio-unitario-locutora');

    const sumaMontos = montoGrafica + montoReel + montoInfluencer + montoLocutora;
    const montoFinal = Math.ceil(sumaMontos / 0.78);

    document.getElementById('total-mas-impuestos').innerText = formatearValorFinanciero(montoFinal);

    document.getElementById('monto-grafica').innerText = formatearValorFinanciero(montoFinal);
    document.getElementById('monto-reel').innerText = formatearValorFinanciero(montoFinal);
    document.getElementById('monto-influencer').innerText = formatearValorFinanciero(montoFinal);
    document.getElementById('monto-locutora').innerText = formatearValorFinanciero(montoFinal);

    return { montoGrafica, montoReel, montoInfluencer, montoLocutora };
}

// Función para calcular los valores en RaiseAds
function calcularRaiseAds() {
    const paqueteContratado = parseFloat(document.getElementById('paquete-contratado').value) || 0;
    const fee = parseFloat(document.getElementById('fee').value) || 0;

    const { montoGrafica, montoReel, montoInfluencer, montoLocutora } = calcularMontos();

    const sumaMontos = montoGrafica + montoReel + montoInfluencer + montoLocutora;

    const inversion = Math.ceil(paqueteContratado + fee + (sumaMontos / 0.78));
    document.getElementById('inversion-raiseads').innerText = formatearValorFinanciero(inversion);

    const formulaCalculada = (sumaMontos / 0.78);
    document.getElementById('calculo-formula').innerText = formatearValorFinanciero(formulaCalculada);

    const saldoPublicitario = (paqueteContratado / 2) - ((paqueteContratado / 2) * 0.38);
    document.getElementById('saldo-publicitario').innerText = formatearValorFinanciero(saldoPublicitario);

    const duracionCampania = parseFloat(document.getElementById('duracion-campania-raiseads').value) || 0;
    const saldoPubliDia = saldoPublicitario / duracionCampania;
    document.getElementById('saldo-publi-dia').innerText = formatearValorFinanciero(saldoPubliDia);

    const costoLead = parseFloat(document.getElementById('costo-lead-raiseads').value) || 0;
    const leadsProyectados = saldoPublicitario / costoLead;
    document.getElementById('leads-proyectados-raiseads').innerText = formatearValorFinanciero(leadsProyectados);

    const conversion = parseFloat(document.getElementById('conversion-raiseads').value) / 100 || 0;
    const cantidadVentas = leadsProyectados * conversion;
    document.getElementById('cantidad-ventas-raiseads').innerText = formatearValorFinanciero(cantidadVentas);

    const ticketPromedio = parseFloat(document.getElementById('ticket-promedio-raiseads').value) || 0;
    const gananciaBruta = parseFloat(document.getElementById('ganancia-bruta-raiseads').value) / 100 || 0;
    const gananciaProyectada = (cantidadVentas * ticketPromedio) * gananciaBruta;
    document.getElementById('ganancia-proyectada-raiseads').innerText = formatearValorFinanciero(gananciaProyectada);

    const ingresosTotales = cantidadVentas * ticketPromedio;
    document.getElementById('ingresos-totales-raiseads').innerText = formatearValorFinanciero(ingresosTotales);

    const roasM0 = ingresosTotales / inversion;
    document.getElementById('roas-m0-raiseads').innerText = roasM0.toFixed(2);
}

// Evento para calcular los campos cuando se presiona el botón
document.getElementById('calcular-todo').addEventListener('click', function () {
    calcularRaiseAds();
});
