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

    // Calcular los montos individuales
    const montoGrafica = calcularMonto('cantidad-grafica', 'precio-unitario-grafica');
    const montoReel = calcularMonto('cantidad-reel', 'precio-unitario-reel');
    const montoInfluencer = calcularMonto('cantidad-influencer', 'precio-unitario-influencer');
    const montoLocutora = calcularMonto('cantidad-locutora', 'precio-unitario-locutora');

    // Calcular la suma total de los montos
    const sumaMontos = montoGrafica + montoReel + montoInfluencer + montoLocutora;

    // Aplicar la fórmula (sumaMontos / 0.78) a las celdas de monto
    const montoFinal = Math.ceil(sumaMontos / 0.78);

    // Muestra (sumaMontos / 0.78) en la celda #total-mas-impuestos
    document.getElementById('total-mas-impuestos').innerText = formatearValorFinanciero(montoFinal);


    // Asignar los valores modificados a las celdas de monto
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

    // Obtener los montos calculados
    const { montoGrafica, montoReel, montoInfluencer, montoLocutora } = calcularMontos();


    // Suma total de los montos
    const sumaMontos = montoGrafica + montoReel + montoInfluencer + montoLocutora;


    // Cálculo de inversión con la fórmula proporcionada
    const inversion = Math.ceil(paqueteContratado + fee + (sumaMontos / 0.78));


    document.getElementById('inversion-raiseads').innerText = formatearValorFinanciero(inversion);

    // Mostrar el cálculo de la fórmula en la fila correspondiente
    const formulaCalculada = (sumaMontos / 0.78);

    // Muestra el resultado de 'formulaCalculada' en la consola



    document.getElementById('calculo-formula').innerText = formatearValorFinanciero(formulaCalculada);

    const saldoPublicitarioARS = paqueteContratado * 0.5; // Saldo Publicitario ARS (Oculto)
    const cotizacionUSD = parseFloat(document.getElementById('cotizacion-usd-raiseads').value) || 0;
    const saldoPublicitarioUSD = saldoPublicitarioARS / cotizacionUSD; // Saldo Publicitario USD
    document.getElementById('saldo-publicitario-usd').innerText = formatearValorFinanciero(saldoPublicitarioUSD);

    const duracionCampania = parseFloat(document.getElementById('duracion-campania-raiseads').value) || 0;
    const saldoPubliUSDporDia = saldoPublicitarioUSD / duracionCampania; // Saldo Publi USD/Día
    document.getElementById('saldo-publi-usd-dia').innerText = formatearValorFinanciero(saldoPubliUSDporDia);

    const costoLead = parseFloat(document.getElementById('costo-lead-raiseads').value) || 0;
    const leadsProyectados = saldoPublicitarioUSD / costoLead; // Leads Proyectados
    document.getElementById('leads-proyectados-raiseads').innerText = formatearValorFinanciero(leadsProyectados);

    const conversion = parseFloat(document.getElementById('conversion-raiseads').value) / 100 || 0;
    const cantidadVentas = leadsProyectados * conversion; // Cantidad de Ventas
    document.getElementById('cantidad-ventas-raiseads').innerText = formatearValorFinanciero(cantidadVentas);

    const ticketPromedio = parseFloat(document.getElementById('ticket-promedio-raiseads').value) || 0;
    const gananciaBruta = parseFloat(document.getElementById('ganancia-bruta-raiseads').value) / 100 || 0;
    const gananciaProyectada = (cantidadVentas * ticketPromedio) * gananciaBruta; // Ganancia Proyectada
    document.getElementById('ganancia-proyectada-raiseads').innerText = formatearValorFinanciero(gananciaProyectada);

    const ingresosTotales = cantidadVentas * ticketPromedio; // Ingresos Totales
    document.getElementById('ingresos-totales-raiseads').innerText = formatearValorFinanciero(ingresosTotales);

    const roasM0 = ingresosTotales / inversion; // ROAS M0
    document.getElementById('roas-m0-raiseads').innerText = roasM0.toFixed(2);
}

// Función para formatear los valores en formato financiero
function formatearValorFinanciero(valor) {
    return valor.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Función para sincronizar los valores de RaiseAds a Servicio Actual
function sincronizarValoresConRaiseAds() {
    // Sincronizar los campos de Servicio Actual con los valores de RaiseAds
    const paqueteContratado = parseFloat(document.getElementById('paquete-contratado').value) || 0;
    const cotizacionUsdRaiseAds = parseFloat(document.getElementById('cotizacion-usd-raiseads').value) || 0;
    const duracionCampaniaRaiseAds = parseFloat(document.getElementById('duracion-campania-raiseads').value) || 0;
    const ticketPromedioRaiseAds = parseFloat(document.getElementById('ticket-promedio-raiseads').value) || 0;
    const gananciaBrutaRaiseAds = parseFloat(document.getElementById('ganancia-bruta-raiseads').value) || 0;
    const conversionRaiseAds = parseFloat(document.getElementById('conversion-raiseads').value) || 0;

    // Asignar valores a los campos de Servicio Actual
    document.getElementById('saldo-servicio-actual').value = paqueteContratado; // Saldo igual a Paquete Contratado
    document.getElementById('cotizacion-usd-servicio-actual').value = cotizacionUsdRaiseAds; // Cotización USD igual
    document.getElementById('duracion-campania-servicio-actual').value = duracionCampaniaRaiseAds; // Duración igual
    document.getElementById('ticket-promedio-servicio-actual').value = ticketPromedioRaiseAds; // Ticket Promedio igual
    document.getElementById('ganancia-bruta-servicio-actual').value = gananciaBrutaRaiseAds; // Ganancia Bruta igual
    document.getElementById('conversion-servicio-actual').value = conversionRaiseAds; // Conversión (%) igual a RaiseAds
}

// Función para calcular los valores en Servicio Actual
function calcularServicioActual() {
    const saldo = parseFloat(document.getElementById('saldo-servicio-actual').value) || 0;
    const impuestos = parseFloat(document.getElementById('impuestos-servicio-actual').value) / 100 || 0;
    const costoContenido = parseFloat(document.getElementById('costo-contenido-servicio-actual').value) || 0;
    const cotizacionUsd = parseFloat(document.getElementById('cotizacion-usd-servicio-actual').value) || 0;
    const duracionCampania = parseFloat(document.getElementById('duracion-campania-servicio-actual').value) || 0;
    const cantidadLeads = parseFloat(document.getElementById('cantidad-leads-servicio-actual').value) || 0;
    const conversion = parseFloat(document.getElementById('conversion-servicio-actual').value) / 100 || 0;
    const ticketPromedio = parseFloat(document.getElementById('ticket-promedio-servicio-actual').value) || 0;
    const gananciaBruta = parseFloat(document.getElementById('ganancia-bruta-servicio-actual').value) / 100 || 0;

    const saldoUsd = saldo * (1 - impuestos) / cotizacionUsd; // Saldo USD
    document.getElementById('saldo-usd-servicio-actual').innerText = formatearValorFinanciero(saldoUsd);

    const costoLead = saldoUsd / cantidadLeads; // Costo Lead
    document.getElementById('costo-lead-servicio-actual').innerText = formatearValorFinanciero(costoLead);

    const cantidadVentas = cantidadLeads * conversion; // Cantidad de Ventas
    document.getElementById('cantidad-ventas-servicio-actual').innerText = formatearValorFinanciero(cantidadVentas);

    const ingresosTotales = cantidadVentas * ticketPromedio; // Ingresos Totales
    document.getElementById('ingresos-totales-servicio-actual').innerText = formatearValorFinanciero(ingresosTotales);

    const gananciaProyectada = ingresosTotales * gananciaBruta; // Ganancia Proyectada
    document.getElementById('ganancia-proyectada-servicio-actual').innerText = formatearValorFinanciero(gananciaProyectada);

    const inversionActual = saldo + costoContenido; // Inversión Actual
    document.getElementById('inversion-servicio-actual').innerText = formatearValorFinanciero(inversionActual);

    const roas = ingresosTotales / inversionActual; // ROAS
    document.getElementById('roas-servicio-actual').innerText = roas.toFixed(2);
}

// Evento para calcular los campos cuando se presiona el botón
document.getElementById('calcular-todo').addEventListener('click', function () {
    sincronizarValoresConRaiseAds(); // Sincronizar los valores de RaiseAds a Servicio Actual
    calcularRaiseAds(); // Calcular RaiseAds
    calcularServicioActual(); // Calcular Servicio Actual
});
