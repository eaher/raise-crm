document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    // Los elementos siguientes permanecen como están
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const leadsDashboardBtn = document.getElementById('leadsDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');

    // URL del formulario actualizado
    const manageLeadUrl = 'https://forms.gle/LHgMUGtyrD1MVbFn7';

    // URL de los tableros de Google Sheet
    const leadsDashboardUrl = 'https://docs.google.com/spreadsheets/d/1Vq18niDF0g9BRxMQe33HqWhq91l453Q1L2i7b0Gwmdo/edit?gid=0#gid=0';
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1_dKuoCEI7N-O9ou6NPAfyWYuvRVGgHqbk5uHxPO5JOY/edit?gid=290720804#gid=290720804';

    // Función para mostrar un formulario en el iframe
    function showForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formContainer.style.marginTop = '30px';
    }

    // Función para mostrar un Google Sheet en el iframe (sin cambios)
    function showSheet(url) {
        sheetContainer.style.display = 'block';
        sheetIframe.src = url;
        sheetContainer.style.marginTop = '30px';
    }

    // Evento para "Gestionar Lead" con el nuevo formulario
    manageLeadBtn.addEventListener('click', function() {
        console.log('Clic en Gestionar Lead'); // Depuración
        showForm(manageLeadUrl);
    });

    // Eventos para los tableros de Google Sheets (sin cambios)
    leadsDashboardBtn.addEventListener('click', function() {
        console.log('Clic en Tablero Leads'); // Depuración
        showSheet(leadsDashboardUrl);
    });

    managementDashboardBtn.addEventListener('click', function() {
        console.log('Clic en Tablero de Gestión'); // Depuración
        showSheet(managementDashboardUrl);
    });
});
