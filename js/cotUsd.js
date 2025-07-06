// js/cotUsd.js

window.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------
  // Utilidades de formateo / extracción de miles
  // ---------------------------------------------
  function formatearMiles(valorSinFormatear) {
    if (valorSinFormatear === '' || isNaN(valorSinFormatear)) return '';
    const numero = parseInt(valorSinFormatear, 10);
    return numero.toLocaleString('es-AR', { maximumFractionDigits: 0 });
  }

  function extraerNumero(str) {
    if (!str) return 0;
    const limpio = str.replace(/\./g, '');
    const n = parseFloat(limpio);
    return isNaN(n) ? 0 : n;
  }

  // ---------------------------------------------
  // Máscara de miles para inputs `.campo-miles`
  // ---------------------------------------------
  document.querySelectorAll('.campo-miles').forEach(input => {
    input.addEventListener('input', (e) => {
      const valorCrudo = e.target.value.replace(/[^\d]/g, '');
      if (valorCrudo === '') {
        e.target.value = '';
        return;
      }
      const formateado = parseInt(valorCrudo, 10).toLocaleString('es-AR', { maximumFractionDigits: 0 });
      e.target.value = formateado;
    });
  });

  // Mostrar/ocultar bloque IA al cambiar el desplegable
  const selectIa = document.getElementById("incluye-ia");
  const bloqueIa = document.getElementById("bloque-ia");

  selectIa.addEventListener("change", () => {
    if (selectIa.value === "si") {
      bloqueIa.classList.remove("d-none");
    } else {
      bloqueIa.classList.add("d-none");
    }
  });


  // ---------------------------------------------
  // Validación de % Conversión (0-100) en tiempo real
  // ---------------------------------------------
  const inputConversion = document.getElementById('porcentaje-conversion');
  const errorConversion = document.getElementById('error-conversion');
  inputConversion.addEventListener('input', () => {
    const val = parseFloat(inputConversion.value);
    if (isNaN(val) || val < 0 || val > 100) {
      inputConversion.classList.add('is-invalid');
      errorConversion.classList.remove('oculto');
    } else {
      inputConversion.classList.remove('is-invalid');
      errorConversion.classList.add('oculto');
    }
  });

  // ---------------------------------------------
  // Validación de Costo Lead en tiempo real
  // ---------------------------------------------
  const inputCostoLead = document.getElementById('costo-lead');
  const errorCostoLead = document.getElementById('error-costo-lead');
  inputCostoLead.addEventListener('input', () => {
    const num = extraerNumero(inputCostoLead.value);
    if (isNaN(num) || num <= 0) {
      inputCostoLead.classList.add('is-invalid');
      errorCostoLead.classList.remove('oculto');
    } else {
      inputCostoLead.classList.remove('is-invalid');
      errorCostoLead.classList.add('oculto');
    }
  });

  // ---------------------------------------------
  // Recalcular todo al pulsar el botón
  // ---------------------------------------------
  document.getElementById('btn-calcular').addEventListener('click', () => {
    // 1) SALDO NETO
    let saldoNetoStr = document.getElementById('saldo-neto').value;
    let saldoNeto = extraerNumero(saldoNetoStr);
    document.getElementById('saldo-neto').value = formatearMiles(saldoNeto);

    // 2) TOTAL LC
    const feeLC = parseFloat(document.getElementById('fee-lc').value);    // 0.20
    const ivaLC = parseFloat(document.getElementById('iva-lc').value);    // 0.21

    //   Monto Fee LC = saldoNeto * 0.20
    const montoFeeLC = saldoNeto * feeLC;               // 20,000  si saldoNeto=100k
    //   Base IVA LC = saldoNeto + montoFeeLC
    const baseIvaLC = saldoNeto + montoFeeLC;           // 120,000
    //   Monto IVA LC = baseIvaLC * 0.21
    const montoIvaLC = baseIvaLC * ivaLC;               // 25,200
    //   Total LC = saldoNeto + montoFeeLC + montoIvaLC
    const totalLC = saldoNeto + montoFeeLC + montoIvaLC; // 145,200

    document.getElementById('total-lc').value = formatearMiles(Math.ceil(totalLC));

    // 3) CONTENIDO MULTIMEDIA
    const reelQ = parseFloat(document.getElementById('reel-q').value) || 0;
    const reelValor = extraerNumero(document.getElementById('reel-valor').value);
    const totalReel = reelQ * reelValor;
    document.getElementById('total-reel').value = formatearMiles(totalReel);
    document.getElementById('reel-total-visible').value = formatearMiles(totalReel);

    const graficaQ = parseFloat(document.getElementById('grafica-q').value) || 0;
    const graficaValor = extraerNumero(document.getElementById('grafica-valor').value);
    const totalGrafica = graficaQ * graficaValor;
    document.getElementById('total-grafica').value = formatearMiles(totalGrafica);
    document.getElementById('grafica-total-visible').value = formatearMiles(totalGrafica);

    const influencerQ = parseFloat(document.getElementById('influencer-q').value) || 0;
    const influencerValor = extraerNumero(document.getElementById('influencer-valor').value);
    const totalInfluencer = influencerQ * influencerValor;
    document.getElementById('total-influencer').value = formatearMiles(totalInfluencer);
    document.getElementById('influencer-total-visible').value = formatearMiles(totalInfluencer);

    const locutoraQ = parseFloat(document.getElementById('locutora-q').value) || 0;
    const locutoraValor = extraerNumero(document.getElementById('locutora-valor').value);
    const totalLocutora = locutoraQ * locutoraValor;
    document.getElementById('total-locutora').value = formatearMiles(totalLocutora);
    document.getElementById('locutora-total-visible').value = formatearMiles(totalLocutora);

    // NUEVO: Fee Onboarding
    const feeQ = parseFloat(document.getElementById('fee-q').value) || 0;
    const feeValor = extraerNumero(document.getElementById('fee-valor').value);
    const totalFee = feeQ * feeValor;
    document.getElementById('total-fee').value = formatearMiles(totalFee);
    document.getElementById('fee-total-visible').value = formatearMiles(totalFee);

    // Total Contenido Multimedia (sumando todos los conceptos)
    const totalContenido = totalReel + totalGrafica + totalInfluencer + totalLocutora + totalFee;
    document.getElementById('total-contenido').value = formatearMiles(totalContenido);


    // 4) FEE AGENCIA
    let porcentajeFeeAgencia = 0;
    if (saldoNeto < 500001) porcentajeFeeAgencia = 0.30;
    else if (saldoNeto <= 1000000) porcentajeFeeAgencia = 0.28;
    else if (saldoNeto <= 5000000) porcentajeFeeAgencia = 0.25;
    else if (saldoNeto <= 10000000) porcentajeFeeAgencia = 0.22;
    else if (saldoNeto <= 20000000) porcentajeFeeAgencia = 0.18;
    else porcentajeFeeAgencia = 0.15;

    document.getElementById('comision-raise').value = (porcentajeFeeAgencia * 100).toFixed(0) + '%';
    document.getElementById('porcentaje-fee-agencia').value = (porcentajeFeeAgencia * 100).toFixed(0) + '%';

    const montoFeeAgencia = Math.ceil(saldoNeto * porcentajeFeeAgencia);
    document.getElementById('fee-agencia').value = formatearMiles(montoFeeAgencia);

    // Base para IVA e IIBB: TotalLC + Contenido + Fee
    const baseAgencia = totalLC + totalContenido + montoFeeAgencia;

    // IVA Agencia (21%) + IIBB Agencia (5%)
    const montoIvaAgencia = Math.ceil(baseAgencia * 0.21);
    const montoIibbAgencia = Math.ceil(baseAgencia * 0.05);
    document.getElementById('iva-agencia').value = formatearMiles(montoIvaAgencia);
    document.getElementById('iibb-agencia').value = formatearMiles(montoIibbAgencia);

    // Total Impuestos (solo IVA + IIBB)
    const totalImpuestos = montoIvaAgencia + montoIibbAgencia;
    document.getElementById('total-impuestos').value = formatearMiles(totalImpuestos);

    // Total antes de MP: base + impuestos (fee solo se usa en la base, no se duplica)
    // totalAntesMP sin IA
const totalAntesMPBase = baseAgencia + totalImpuestos;

// Calcular valor de IA (solo si está habilitado)
let totalIA = 0;
if (selectIa.value === "si") {
  const valorIA = parseFloat(document.getElementById("valor-ia").value) || 0;
  const cotizacionUSD = parseFloat(document.getElementById("cotizacion-usd").value) || 0;
  totalIA = valorIA * cotizacionUSD;
  document.getElementById("total-ia").value = formatearMiles(totalIA);
}

// totalAntesMP final con IA si corresponde
const totalAntesMP = totalAntesMPBase + totalIA;



    // 6) TOTAL A PAGAR Y DESCUENTO
    const metodoPago = document.getElementById('metodo-pago').value;
    let totalAPagar = 0;
    let textoDescuento = '0%';

    if (metodoPago === 'Transferencia') {
      // Sin ajuste (Transferencia = 8% descuento, pero ya base calcula igual)
      totalAPagar = totalAntesMP;
      textoDescuento = '8%';
    } else {
      // Para otros métodos: dividir por (1 - 0.08) = 0.92
      totalAPagar = totalAntesMP / 0.92; // 371,952 / 0.92 = 404,295.65
      textoDescuento = '0%';
    }

    document.getElementById('total-a-pagar').value =
      formatearMiles(Math.ceil(totalAPagar));

    console.log('🧮 DESGLOSE DE IMPUESTOS Y FEE AGENCIA');
    console.log('Saldo Neto:', saldoNeto);
    console.log('% Comisión Raise:', (porcentajeFeeAgencia * 100).toFixed(0) + '%');
    console.log('Monto Fee Agencia:', montoFeeAgencia);
    console.log('Base Agencia (LC + Contenido + Fee):', baseAgencia);
    console.log('IVA Agencia (21%):', montoIvaAgencia);
    console.log('IIBB Agencia (5%):', montoIibbAgencia);
    console.log('Total Impuestos:', totalImpuestos);



    const inputTotalPagar = document.getElementById('total-a-pagar');
    if (metodoPago === 'Transferencia') {
      inputTotalPagar.style.backgroundColor = '#e8f5e9';
    } else {
      inputTotalPagar.style.backgroundColor = '#f1f1f1';
    }

    // 7) LEADS ESTIMADOS E INGRESOS APROXIMADOS
    const costoLead = extraerNumero(document.getElementById('costo-lead').value);
    let leadsEstimados = 0;
    if (!isNaN(costoLead) && costoLead > 0) {
      leadsEstimados = saldoNeto / costoLead;
    }
    document.getElementById('leads-estimados').value = leadsEstimados.toFixed(2);

    const comisionVenta = extraerNumero(document.getElementById('comision-venta').value);
    const porcentajeConversion = parseFloat(document.getElementById('porcentaje-conversion').value) / 100 || 0;
    let ingresosAprox = 0;
    if (!isNaN(comisionVenta) && !isNaN(porcentajeConversion)) {
      ingresosAprox = leadsEstimados * porcentajeConversion * comisionVenta;
    }
    document.getElementById('ingresos-aprox').value =
      formatearMiles(Math.ceil(ingresosAprox));
    // Ventas Estimadas = Leads Estimados * % Conversión
    const ventasEstimadas = leadsEstimados * porcentajeConversion;
    document.getElementById('ventas-estimadas').value = ventasEstimadas.toFixed(2);




  });

  // ---------------------------------------------
  // Recalcular automáticamente al cambiar método de pago
  // ---------------------------------------------
  document.getElementById('metodo-pago').addEventListener('change', () => {
    document.getElementById('btn-calcular').click();
  });
});
