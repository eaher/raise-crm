document.addEventListener('DOMContentLoaded', function() {
    console.log('Configurando la página de Seller Online'); // Depuración
    setupPage(
        false, 
        true,  
        false, 
        true,  
        'formContainer',
        'formIframe',
        '', 
        'https://forms.gle/HZ9KHvkDrGSiKqh87', 
        'sheetContainer',
        'sheetIframe',
        '', 
        'https://docs.google.com/spreadsheets/d/14L8Jq_7O29crfbpL42UfdNHwz_jPBZJVvbLWgAe-Pu4/edit?gid=1239182644#gid=1239182644'
    );

    function setupPage(needsCreateLead, needsManageLead, needsLeadsDashboard, needsManagementDashboard, formContId, formIframeId, createFormUrl, manageFormUrl, sheetContId, sheetIframeId, leadsSheetUrl, managementSheetUrl) {
        const formContainer = document.getElementById(formContId);
        const formIframe = document.getElementById(formIframeId);
        const sheetContainer = document.getElementById(sheetContId);
        const sheetIframe = document.getElementById(sheetIframeId);
        console.log('Elementos encontrados:', formContainer, formIframe, sheetContainer, sheetIframe); // Depuración

        // Aquí irían las mismas validaciones y asignaciones de eventos que ya hemos discutido
        // para los botones "Crear Lead", "Gestionar Lead", "Tablero Leads", y "Tablero de Gestión".
    }
});
