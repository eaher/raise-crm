document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');

    // URLs de los tableros
    const manageLeadUrl = 'https://forms.gle/5QkWmsGK6du3gcSe9';
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1KZsYhHPiQYlCjkYrPTcgTpLOTOE0cd5ZVRBKhy-xgiI/edit?gid=0#gid=0';
    const clientDashboardUrl = 'https://docs.google.com/spreadsheets/d/1vAoXWGp86H6U4loKCr9jYIA3vxESaE_GG7a0azy3BnU/edit?gid=725351691#gid=725351691';
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1QXeETvV6ObN04AlRaRMirGfAWKGBVyM0-oB9tfY2gKs/edit?gid=0#gid=0';

    // Función para mostrar un formulario en el iframe
    function showForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formContainer.style.marginTop = '30px';
    }

    // Función para mostrar los Google Sheets en los iframes
    function showSheets() {
        sheetContainer.innerHTML = `
            <h3>CLIENTES</h3>
            <iframe src="${clientDashboardUrl}" style="width: 100%; height: 600px; border: none;"></iframe>
            <h3 style="margin-top: 20px;">HISTORIAL DE GESTIONES</h3>
            <iframe src="${managementDashboardUrl}" style="width: 100%; height: 600px; border: none; margin-top: 20px;"></iframe>
        `;
        sheetContainer.style.display = 'block';
    }

    // Evento para "Gestionar"
    manageLeadBtn.addEventListener('click', function() {
        showForm(manageLeadUrl);
    });

    // Evento para "Onboarding"
    interestedDashboardBtn.addEventListener('click', function() {
        showForm(interestedDashboardUrl);
    });

    // Evento para "Tablero de Gestión"
    managementDashboardBtn.addEventListener('click', function() {
        showSheets();
    });
});
