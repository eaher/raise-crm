document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    console.log('Current Path:', currentPath); // Depuración

    if (currentPath.includes('setter.html')) {
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
    } else if (currentPath.includes('seller-oline.html')) {
        console.log('Configurando la página de Seller Oline'); // Depuración
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
    }
    
    function setupPage(needsCreateLead, needsManageLead, needsLeadsDashboard, needsManagementDashboard, formContId, formIframeId, createFormUrl, manageFormUrl, sheetContId, sheetIframeId, leadsSheetUrl, managementSheetUrl) {
        const formContainer = document.getElementById(formContId);
        const formIframe = document.getElementById(formIframeId);
        const sheetContainer = document.getElementById(sheetContId);
        const sheetIframe = document.getElementById(sheetIframeId);
        console.log('Elementos encontrados:', formContainer, formIframe, sheetContainer, sheetIframe); // Depuración

        if (needsCreateLead) {
            const createLeadBtn = document.getElementById('createLeadBtn');
            createLeadBtn.addEventListener('click', function() {
                console.log('Clic en Crear Lead'); // Depuración
                formContainer.style.display = 'block';
                formIframe.src = createFormUrl;
                formContainer.style.marginTop = '30px';
            });
        }

        if (needsManageLead) {
            const manageLeadBtn = document.getElementById('manageLeadBtn');
            manageLeadBtn.addEventListener('click', function() {
                console.log('Clic en Gestionar Lead'); // Depuración
                formContainer.style.display = 'block';
                formIframe.src = manageFormUrl;
                formContainer.style.marginTop = '30px';
            });
        }

        if (needsLeadsDashboard) {
            const leadsDashboardBtn = document.getElementById('leadsDashboardBtn');
            leadsDashboardBtn.addEventListener('click', function() {
                console.log('Clic en Tablero Leads'); // Depuración
                sheetContainer.style.display = 'block';
                sheetIframe.src = leadsSheetUrl;
                sheetContainer.style.marginTop = '30px';
            });
        }

        if (needsManagementDashboard) {
            const managementDashboardBtn = document.getElementById('managementDashboardBtn');
            managementDashboardBtn.addEventListener('click', function() {
                console.log('Clic en Tablero de Gestión'); // Depuración
                sheetContainer.style.display = 'block';
                sheetIframe.src = managementSheetUrl;
                sheetContainer.style.marginTop = '30px';
            });
        }
    }
});
