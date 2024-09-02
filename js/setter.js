document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const createLeadBtn = document.getElementById('createLeadBtn');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const leadsDashboardBtn = document.getElementById('leadsDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');

    // URL de los formularios
    const createLeadUrl = 'https://forms.gle/VCC3kpfRhroUpofa6';
    const manageLeadUrl = 'https://forms.gle/tk5Xaeae19X4v56z5';

    // URL de los tableros de Google Sheets
    const leadsDashboardUrl = 'https://docs.google.com/spreadsheets/d/1LuZ_DqnlbGZBSPI2XjkyIn0lLVF-d8omQnsWrmBj0jc/edit?gid=579307862#gid=579307862';
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1m8P6rhGYp0XgzvV-b6Nk1ba_cipUgrTL_rBqSGLezTo/edit?gid=331933702#gid=331933702';

    // Función para mostrar un formulario en el iframe
    function showForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formContainer.style.marginTop = '30px';
    }

    // Función para mostrar un Google Sheet en el iframe
    function showSheet(url) {
        sheetContainer.style.display = 'block';
        sheetIframe.src = url;
        sheetContainer.style.marginTop = '30px';
    }

    // Evento para "Crear Lead"
    createLeadBtn.addEventListener('click', function() {
        console.log('Clic en Crear Lead'); // Depuración
        showForm(createLeadUrl);
    });

    // Evento para "Gestionar Lead"
    manageLeadBtn.addEventListener('click', function() {
        console.log('Clic en Gestionar Lead'); // Depuración
        showForm(manageLeadUrl);
    });

    // Evento para "Tablero Leads"
    leadsDashboardBtn.addEventListener('click', function() {
        console.log('Clic en Tablero Leads'); // Depuración
        showSheet(leadsDashboardUrl);
    });

    // Evento para "Tablero de Gestión"
    managementDashboardBtn.addEventListener('click', function() {
        console.log('Clic en Tablero de Gestión'); // Depuración
        showSheet(managementDashboardUrl);
    });
});
