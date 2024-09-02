document.addEventListener('DOMContentLoaded', function() {
    console.log('Configurando la página de Setter'); // Depuración
    setupPage(
        true, 
        true,  
        true,  
        true,  
        'formContainer',
        'formIframe',
        'https://forms.gle/WewwBTXJYham9dow8', 
        'https://forms.gle/S5ipeDx7gsWUmsET7', 
        'sheetContainer',
        'sheetIframe',
        'https://docs.google.com/spreadsheets/d/1LuZ_DqnlbGZBSPI2XjkyIn0lLVF-d8omQnsWrmBj0jc/edit?gid=579307862#gid=579307862', 
        'https://docs.google.com/spreadsheets/d/1m8P6rhGYp0XgzvV-b6Nk1ba_cipUgrTL_rBqSGLezTo/edit?gid=331933702#gid=331933702'
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
