document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const salesFollowUpBtn = document.getElementById('salesFollowUpBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');

    // URL de los formularios
    const manageLeadUrl = 'https://forms.gle/aVgRr1Dw17gH9Pbe8';
    const salesFollowUpUrl = 'https://forms.gle/3ah5X1k7SeTouzAt5';

    // URL del tablero de Google Sheets
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/14L8Jq_7O29crfbpL42UfdNHwz_jPBZJVvbLWgAe-Pu4/edit?gid=755886744#gid=755886744';

    // Función para mostrar un formulario en el iframe
    function showForm(url) {
        formContainer.style.display = 'block'; // Mostrar el contenedor del formulario
        formIframe.src = url; // Establecer la URL del iframe
        formContainer.style.marginTop = '30px'; // Ajustar el margen superior
    }

    // Función para mostrar un Google Sheet en el iframe
    function showSheet(url) {
        sheetContainer.style.display = 'block'; // Mostrar el contenedor del sheet
        sheetIframe.src = url; // Establecer la URL del iframe
        sheetContainer.style.marginTop = '30px'; // Ajustar el margen superior
    }

    // Evento para "Gestionar Lead"
    manageLeadBtn.addEventListener('click', function() {
        console.log('Clic en Gestionar Lead'); // Depuración
        showForm(manageLeadUrl);
    });

    // Evento para "Seguimiento de Ventas"
    salesFollowUpBtn.addEventListener('click', function() {
        console.log('Clic en Seguimiento de Ventas'); // Depuración
        showForm(salesFollowUpUrl);
    });

    // Evento para "Tablero de Gestión"
    managementDashboardBtn.addEventListener('click', function() {
        console.log('Clic en Tablero de Gestión'); // Depuración
        showSheet(managementDashboardUrl);
    });
});
