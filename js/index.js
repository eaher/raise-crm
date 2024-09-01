document.addEventListener('DOMContentLoaded', function() {
    // Obtener la ruta actual de la página
    const currentPath = window.location.pathname;

    if (currentPath.includes('setter.html')) {
        // Código específico para la página Setter
        setupPage(
            true,  // Necesita botón Crear Lead
            true,  // Necesita botón Gestionar Lead
            true,  // Necesita Tablero Leads
            true,  // Necesita Tablero Gestión
            'formContainer',
            'formIframe',
            'https://forms.gle/WewwBTXJYham9dow8', // Formulario Crear Lead para Setter
            'https://forms.gle/S5ipeDx7gsWUmsET7', // Formulario Gestionar Lead para Setter
            'sheetContainer',
            'sheetIframe',
            'https://docs.google.com/spreadsheets/d/1LuZ_DqnlbGZBSPI2XjkyIn0lLVF-d8omQnsWrmBj0jc/edit?gid=579307862#gid=579307862', // Tablero Leads para Setter
            'https://docs.google.com/spreadsheets/d/1m8P6rhGYp0XgzvV-b6Nk1ba_cipUgrTL_rBqSGLezTo/edit?gid=331933702#gid=331933702' // Tablero de Gestión para Setter
        );
    } else if (currentPath.includes('seller-oline.html')) {
        // Código específico para la página Seller Oline
        setupPage(
            false, // No necesita botón Crear Lead
            true,  // Necesita botón Gestionar Lead
            false, // No necesita Tablero Leads
            true,  // Necesita Tablero Gestión
            'formContainer',
            'formIframe',
            '', // No hay URL para Crear Lead en Seller Oline
            'https://forms.gle/HZ9KHvkDrGSiKqh87', // Formulario Gestionar Lead para Seller Oline
            'sheetContainer',
            'sheetIframe',
            '', // No hay URL para Tablero Leads en Seller Oline
            'https://docs.google.com/spreadsheets/d/14L8Jq_7O29crfbpL42UfdNHwz_jPBZJVvbLWgAe-Pu4/edit?gid=1239182644#gid=1239182644' // Nueva URL para Tablero de Gestión de Seller Oline
        );
    }
    // Agregar más condiciones para otras páginas si es necesario

    // Función para configurar los botones y contenedores según la página
    function setupPage(needsCreateLead, needsManageLead, needsLeadsDashboard, needsManagementDashboard, formContId, formIframeId, createFormUrl, manageFormUrl, sheetContId, sheetIframeId, leadsSheetUrl, managementSheetUrl) {
        const formContainer = document.getElementById(formContId);
        const formIframe = document.getElementById(formIframeId);
        const sheetContainer = document.getElementById(sheetContId);
        const sheetIframe = document.getElementById(sheetIframeId);

        // Manejar clic en "Crear Lead" solo si es necesario
        if (needsCreateLead) {
            const createLeadBtn = document.getElementById('createLeadBtn');
            createLeadBtn.addEventListener('click', function() {
                formContainer.style.display = 'block';
                formIframe.src = createFormUrl;
                formContainer.style.marginTop = '30px';
            });
        }

        // Manejar clic en "Gestionar Lead" solo si es necesario
        if (needsManageLead) {
            const manageLeadBtn = document.getElementById('manageLeadBtn');
            manageLeadBtn.addEventListener('click', function() {
                formContainer.style.display = 'block';
                formIframe.src = manageFormUrl;
                formContainer.style.marginTop = '30px';
            });
        }

        // Nuevo botón de "Seguimiento de Ventas"
        const salesFollowUpBtn = document.getElementById('salesFollowUpBtn');
        salesFollowUpBtn.addEventListener('click', function() {
            formContainer.style.display = 'block';
            formIframe.src = 'https://forms.gle/gcpzua7uBFvEk4SR8'; // URL del formulario para Seguimiento de Ventas
            formContainer.style.marginTop = '30px';
        });

        // Manejar clic en "Tablero Leads" solo si es necesario
        if (needsLeadsDashboard) {
            const leadsDashboardBtn = document.getElementById('leadsDashboardBtn');
            leadsDashboardBtn.addEventListener('click', function() {
                sheetContainer.style.display = 'block';
                sheetIframe.src = leadsSheetUrl;
                sheetContainer.style.marginTop = '30px';
            });
        }

        // Manejar clic en "Tablero de Gestión" solo si es necesario
        if (needsManagementDashboard) {
            const managementDashboardBtn = document.getElementById('managementDashboardBtn');
            managementDashboardBtn.addEventListener('click', function() {
                sheetContainer.style.display = 'block';
                sheetIframe.src = managementSheetUrl;
                sheetContainer.style.marginTop = '30px';
            });
        }
    }
});
