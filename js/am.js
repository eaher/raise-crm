document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');

    // URL del formulario actualizado
    const manageLeadUrl = 'https://forms.gle/5QkWmsGK6du3gcSe9'; // Formulario de Gestionar

    // URL del tablero de onb
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1KZsYhHPiQYlCjkYrPTcgTpLOTOE0cd5ZVRBKhy-xgiI/edit?gid=0#gid=0';

    // URL del tablero de gestión 
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/10ZIhe7fCYvkndqQIeh6eTy9MDi8A8PEQWKIqLBBvrts/edit?gid=0#gid=0'; 

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

    // Evento para "Gestionar"
    manageLeadBtn.addEventListener('click', function() {
        showForm(manageLeadUrl);
    });

    // Evento para "onb"
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

    // Prevenir el desplazamiento cuando el iframe toma el foco
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.addEventListener('load', () => {
            iframe.contentWindow.addEventListener('focus', function() {
                // Al enfocarse en el iframe, mantenemos la posición actual sin permitir scroll
                const scrollY = window.scrollY;
                setTimeout(() => window.scrollTo(0, scrollY), 0);
            });
        });
    });
});
