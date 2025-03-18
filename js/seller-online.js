document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');  // Contenedor de formularios
    const formIframe = document.getElementById('formIframe');  // Iframe de formularios
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');
    const orderTypeSelect = document.getElementById('orderTypeSelect');  // Selector para tipo de OC
    const openOrderBtn = document.getElementById('openOrderBtn'); // Botón "Abrir"
    const closeOrderPurchaseBtn = document.getElementById('closeOrderPurchaseBtn');
    const newOrderContainer = document.getElementById('orderFormSection');  // Nueva sección para la orden de compra
    const newOrderIframe = document.getElementById('orderIframe'); // Iframe de la orden de compra

    // URLs de los formularios y Google Sheets
    const manageLeadUrl = 'https://forms.gle/zRttGTwroK8Mbizb9';
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1uLGWdfI_xYxhSReAVIWSIL8URitSy7zqIiwq2SZp1uo/edit?gid=1982444138#gid=1982444138';
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1GOzXzrc6Q7fwxOEUTfIptL4BS1p9uLI9_s2ntCIQgYw/edit?usp=sharing';
    const orderPurchaseUrlPublicidad = 'https://docs.google.com/forms/d/e/1FAIpQLScMy2Bp_A05z489rihoj5OUn4LMIyZ7z8rgKfM0TGF4ZnKTvA/viewform';
    const orderPurchaseUrlSsWeb = 'https://docs.google.com/forms/d/e/1FAIpQLScXsEjsbdK56Y5T4qWqk0v1IbC/viewform';

    // Función para mostrar un formulario en la sección Formularios
    function showForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formContainer.style.marginTop = '30px';
    }

    // Función para mostrar un contenido en la sección Tableros
    function showSheet(url) {
        sheetContainer.style.display = 'block';
        sheetIframe.src = url;
        sheetContainer.style.marginTop = '30px';
    }

    // Evento para "Gestionar Leads"
    manageLeadBtn.addEventListener('click', function() {
        showForm(manageLeadUrl);
    });

    // Evento para "Interesados"
    interestedDashboardBtn.addEventListener('click', function() {
        showSheet(interestedDashboardUrl);
    });

    // Evento para "Tablero de Gestión"
    managementDashboardBtn.addEventListener('click', function() {
        if (managementDashboardUrl) {
            showSheet(managementDashboardUrl);
        } else {
            alert('La URL del Tablero de Gestión aún no ha sido configurada.');
        }
    });

    // Evento para "Orden de Compra" (con selector)
    openOrderBtn.addEventListener('click', function() {
        const selectedValue = orderTypeSelect.value;
        console.log('Botón "Abrir" presionado');
        console.log('Valor seleccionado en el selector: ', selectedValue);

        // Verificamos si se ha seleccionado un valor
        if (!selectedValue) {
            alert("Por favor, selecciona un tipo de orden de compra.");
            console.log('No se seleccionó un tipo de orden.');
            return;
        }

        // Mostramos el contenedor de la nueva sección para la orden de compra
        newOrderContainer.style.display = 'block';
        console.log('Formulario seleccionado:', selectedValue); // Log de la selección

        // Cargar el formulario dependiendo de la selección
        if (selectedValue === "OC Publicidad") {
            newOrderIframe.src = orderPurchaseUrlPublicidad;
            console.log('Cargando formulario de OC Publicidad...');
        } else if (selectedValue === "OC Ss Web") {
            newOrderIframe.src = orderPurchaseUrlSsWeb;
            console.log('Cargando formulario de OC Ss Web...');
        } else {
            alert("Opción de orden no válida.");
            console.log('Opción no válida seleccionada.');
        }
    });

    // Cerrar el formulario de la orden de compra
    closeOrderPurchaseBtn.addEventListener('click', function() {
        newOrderContainer.style.display = 'none';
        newOrderIframe.src = '';  // Limpiar el iframe
        console.log('Formulario cerrado.');
    });
});
