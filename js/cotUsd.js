// js/cotUsd.js
  function formatearMiles(valorSinFormatear) {
    if (valorSinFormatear === '' || isNaN(valorSinFormatear)) return '';
    const numero = parseInt(valorSinFormatear, 10);
    return numero.toLocaleString('es-AR', { maximumFractionDigits: 0 });
  }
window.addEventListener('DOMContentLoaded', () => {


  function extraerNumero(str) {
    if (!str) return 0;
    const limpio = str.replace(/\./g, '');
    const n = parseFloat(limpio);
    return isNaN(n) ? 0 : n;
  }

  document.querySelectorAll('.campo-miles').forEach(input => {
    input.addEventListener('input', (e) => {
      const valorCrudo = e.target.value.replace(/[^\d]/g, '');
      e.target.value = valorCrudo === '' ? '' : parseInt(valorCrudo, 10).toLocaleString('es-AR');
    });
  });

  const selectIa = document.getElementById("incluye-ia");
  const bloqueIa = document.getElementById("bloque-ia");

  selectIa.addEventListener("change", () => {
    bloqueIa.classList.toggle("d-none", selectIa.value !== "si");
  });

  const inputConversion = document.getElementById('porcentaje-conversion');
  const errorConversion = document.getElementById('error-conversion');
  inputConversion.addEventListener('input', () => {
    const val = parseFloat(inputConversion.value);
    inputConversion.classList.toggle('is-invalid', isNaN(val) || val < 0 || val > 100);
    errorConversion.classList.toggle('oculto', !(isNaN(val) || val < 0 || val > 100));
  });

  const inputCostoLead = document.getElementById('costo-lead');
  const errorCostoLead = document.getElementById('error-costo-lead');
  inputCostoLead.addEventListener('input', () => {
    const num = extraerNumero(inputCostoLead.value);
    inputCostoLead.classList.toggle('is-invalid', isNaN(num) || num <= 0);
    errorCostoLead.classList.toggle('oculto', !(isNaN(num) || num <= 0));
  });

  document.getElementById('btn-calcular').addEventListener('click', () => {
    const saldoNeto = extraerNumero(document.getElementById('saldo-neto').value);
    const porcentajeFee = saldoNeto < 500001 ? 0.3 : saldoNeto <= 1000000 ? 0.28 : saldoNeto <= 5000000 ? 0.25 : saldoNeto <= 10000000 ? 0.22 : saldoNeto <= 20000000 ? 0.18 : 0.15;
    const montoFee = Math.ceil(saldoNeto * porcentajeFee);
    document.getElementById('fee-agencia').value = formatearMiles(montoFee);
    document.getElementById('comision-raise').value = `${(porcentajeFee * 100).toFixed(0)}%`;
    document.getElementById('porcentaje-fee-agencia').value = `${(porcentajeFee * 100).toFixed(0)}%`;

    const totalContenido = ['reel', 'grafica', 'influencer', 'locutora', 'fee'].reduce((acum, id) => {
      const q = parseFloat(document.getElementById(`${id}-q`).value) || 0;
      const v = extraerNumero(document.getElementById(`${id}-valor`).value);
      const total = q * v;
      document.getElementById(`total-${id}`).value = total;
      document.getElementById(`${id}-total-visible`).value = formatearMiles(total);
      return acum + total;
    }, 0);
    document.getElementById('total-contenido').value = formatearMiles(totalContenido);

    const totalLC = saldoNeto + saldoNeto * 0.2 + (saldoNeto * 1.2) * 0.21;
    document.getElementById('total-lc').value = formatearMiles(Math.ceil(totalLC));

    const baseAgencia = totalLC + totalContenido + montoFee;
    const ivaAgencia = Math.ceil(baseAgencia * 0.21);
    const iibbAgencia = Math.ceil(baseAgencia * 0.05);
    const totalImpuestos = ivaAgencia + iibbAgencia;
    document.getElementById('iva-agencia').value = formatearMiles(ivaAgencia);
    document.getElementById('iibb-agencia').value = formatearMiles(iibbAgencia);
    document.getElementById('total-impuestos').value = formatearMiles(totalImpuestos);

    let totalIA = 0;
    if (selectIa.value === "si") {
      calcularProcesosIA(); // <== recalcular IA si está visible
      const valorIA = parseFloat(document.getElementById("valor-ia").value) || 0;
      const cotizacionUSD = parseFloat(document.getElementById("cotizacion-usd").value) || 0;
      totalIA = valorIA * cotizacionUSD * 1.1;
      document.getElementById("total-ia").value = formatearMiles(Math.ceil(totalIA));
    }

    const totalBase = baseAgencia + totalImpuestos + totalIA;
    const metodo = document.getElementById('metodo-pago').value;
    const totalFinal = metodo === 'Transferencia' ? totalBase : totalBase / 0.92;
    document.getElementById('total-a-pagar').value = formatearMiles(Math.ceil(totalFinal));
    document.getElementById('descuento').value = metodo === 'Transferencia' ? '8%' : '0%';

    const costoLead = extraerNumero(document.getElementById('costo-lead').value);
    const leads = costoLead > 0 ? saldoNeto / costoLead : 0;
    document.getElementById('leads-estimados').value = leads.toFixed(2);

    const comision = extraerNumero(document.getElementById('comision-venta').value);
    const porcentajeConv = parseFloat(document.getElementById('porcentaje-conversion').value) / 100 || 0;
    const ingresos = leads * porcentajeConv * comision;
    document.getElementById('ingresos-aprox').value = formatearMiles(Math.ceil(ingresos));
    document.getElementById('ventas-estimadas').value = (leads * porcentajeConv).toFixed(2);
  });

  document.getElementById('metodo-pago').addEventListener('change', () => {
    document.getElementById('btn-calcular').click();
  });
});

const tablaConversaciones = {
  1000: 250,
  2000: 300,
  3000: 335,
  4000: 380,
  5000: 425,
  9000: 605,
  12000: 740
};

const containerProcesos = document.getElementById('procesos-container');
const templateProceso = document.getElementById('template-proceso');

const calcularProcesosIA = () => {
  const procesos = containerProcesos.querySelectorAll('.proceso');
  const cotizacionUSD = parseFloat(document.getElementById("cotizacion-usd").value) || 0;

  let totalUSD = 0;

  procesos.forEach((proceso, index) => {
    const conversaciones = parseInt(proceso.querySelector('.conversaciones').value);
    const onboarding = parseFloat(proceso.querySelector('.onboarding').value) || 0;
    const costoPaquete = tablaConversaciones[conversaciones] || 0;

    let margen = index === 0 ? costoPaquete * 0.905 : costoPaquete * 0.905 / 2;
    let subtotal = costoPaquete + margen + onboarding; // ✅ onboarding se suma antes del markup
    let valorProceso = subtotal * 1.26;

    proceso.querySelector('.valor-proceso').value = valorProceso.toFixed(2);
    totalUSD += valorProceso;
  });

  document.getElementById('valor-ia').value = totalUSD.toFixed(2);
  const totalARS = Math.ceil(totalUSD * cotizacionUSD * 1.1);
  document.getElementById('total-ia').value = formatearMiles(totalARS);
};

containerProcesos.addEventListener('input', calcularProcesosIA);
containerProcesos.addEventListener('change', calcularProcesosIA);

document.getElementById('agregar-proceso').addEventListener('click', () => {
  const clone = templateProceso.content.cloneNode(true);
  containerProcesos.appendChild(clone);
  calcularProcesosIA();
});
