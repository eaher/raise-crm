document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const sheetIframe = document.getElementById('sheetIframe');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');
    const orderPurchaseBtn = document.getElementById('orderPurchaseBtn'); // Botón para Orden de Compra

    // URL del formulario para "Gestionar Leads"
    const manageLeadUrl = 'https://forms.gle/zRttGTwroK8Mbizb9';

    // URL del tablero de Interesados
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1uLGWdfI_xYxhSReAVIWSIL8URitSy7zqIiwq2SZp1uo/edit?gid=1982444138#gid=1982444138';

    // URL del tablero de Gestión 
    const managementDashboardUrl = 'https://docs.google.com/spreadsheets/d/1GOzXzrc6Q7fwxOEUTfIptL4BS1p9uLI9_s2ntCIQgYw/edit?usp=sharing';

    // URL del formulario de Orden de Compra
    const orderPurchaseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScMy2Bp_A05z489rihoj5OUn4LMIyZ7z8rgKfM0TGF4ZnKTvA/viewform';

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

    // Evento para "Orden de Compra"
    orderPurchaseBtn.addEventListener('click', function() {
        showSheet(orderPurchaseUrl);
    });
});
