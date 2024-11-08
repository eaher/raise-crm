document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const closeInterestedBtn = document.getElementById('closeInterestedBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');
    const closeManagementBtn = document.getElementById('closeManagementBtn');

    // URLs de los Google Sheets
    const manageLeadUrl = 'https://forms.gle/5QkWmsGK6du3gcSe9';
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1KZsYhHPiQYlCjkYrPTcgTpLOTOE0cd5ZVRBKhy-xgiI/edit?gid=0#gid=0';
    const clientDashboardUrl = 'https://docs.google.com/spreadsheets/d/1vAoXWGp86H6U4loKCr9jYIA3vxESaE_GG7a0azy3BnU/edit?gid=725351691#gid=725351691';
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1QXeETvV6ObN04AlRaRMirGfAWKGBVyM0-oB9tfY2gKs/edit?gid=0#gid=0';

    // Función para mostrar un formulario en el iframe
    function showForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formIframe.style.marginLeft = '10px';
        formIframe.style.marginRight = '10px';
        formContainer.style.marginTop = '30px';
    }

    // Función para cerrar el contenedor del formulario
    closeFormBtn.addEventListener('click', function() {
        formContainer.style.display = 'none';
        formIframe.src = '';
    });

    // Función para cerrar el contenedor de sheets
    function closeSheets() {
        sheetContainer.style.display = 'none';
        sheetContainer.innerHTML = '';
    }

    // Función para mostrar los Google Sheets específicos para "Tablero de Gestión"
    function showManagementSheets() {
        closeSheets();  // Limpiar cualquier contenido previo
        
        // Mostrar ambos Google Sheets con títulos, márgenes y margen lateral de 10px
        sheetContainer.innerHTML = `
            <div>
                <h3>CLIENTES</h3>
                <iframe src="${clientDashboardUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
            </div>
            <div style="margin-top: 20px;">
                <h3>HISTORIAL DE GESTIONES</h3>
                <iframe src="${managementDashboardUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
            </div>
        `;
        sheetContainer.style.display = 'block';
    }

    // Función para mostrar un Google Sheet específico
    function showSheet(url) {
        closeSheets();  // Limpiar cualquier contenido previo

        // Muestra solo el Google Sheet deseado con márgenes laterales de 10px
        sheetContainer.innerHTML = `
            <iframe src="${url}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
        `;
        sheetContainer.style.display = 'block';
    }

    // Eventos para los botones
    manageLeadBtn.addEventListener('click', function() {
        showForm(manageLeadUrl);
    });

    interestedDashboardBtn.addEventListener('click', function() {
        showSheet(interestedDashboardUrl);
    });

    managementDashboardBtn.addEventListener('click', function() {
        showManagementSheets();
    });

    // Cerrar botón para interestedDashboard
    closeInterestedBtn.addEventListener('click', function() {
        closeSheets();
    });

    // Cerrar botón para managementDashboard
    closeManagementBtn.addEventListener('click', function() {
        closeSheets();
    });
});
