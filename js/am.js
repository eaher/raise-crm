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

    // NUEVOS ELEMENTOS Y URL
    const newOrderPurchaseBtn = document.getElementById('newOrderPurchaseBtn');
    const newOrderContainer = document.getElementById('newOrderContainer');
    const newOrderIframe = document.getElementById('newOrderIframe');
    const orderPurchaseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScMy2Bp_A05z489rihoj5OUn4LMIyZ7z8rgKfM0TGF4ZnKTvA/viewform';

    // URLs de los Google Sheets
    const manageLeadUrl = 'https://forms.gle/5QkWmsGK6du3gcSe9';
    const interestedDashboardUrl = 'https://docs.google.com/spreadsheets/d/1KZsYhHPiQYlCjkYrPTcgTpLOTOE0cd5ZVRBKhy-xgiI/edit?gid=0#gid=0';
    const clientDashboardUrl = 'https://docs.google.com/spreadsheets/d/1vAoXWGp86H6U4loKCr9jYIA3vxESaE_GG7a0azy3BnU/edit?gid=725351691#gid=0';
    const managementDashboardUrls = {
        "123456": "https://docs.google.com/spreadsheets/d/1QXeETvV6ObN04AlRaRMirGfAWKGBVyM0-oB9tfY2gKs/edit?gid=0#gid=0",
        "123457": "https://docs.google.com/spreadsheets/d/1fHxBSZ17tOUmm502fxwLbbK9cH3zKqHZVpc7CxPRxYQ/edit?gid=0#gid=0",
        "123458": "https://docs.google.com/spreadsheets/d/1Bv6SSMhXH0kj3CMDSgQDGP8rzdoIbfZWywuckchJyrY/edit?gid=0#gid=0",
        "123459": "https://docs.google.com/spreadsheets/d/1HB9ttZUoxnK0dAnhV3cJWMzSztObZPvYqxf9k26b794/edit?gid=0#gid=0",
        "123460": "https://docs.google.com/spreadsheets/d/1RtmML7iOI35y4rvBlqjnwH7heojH8HtmwUFQvZ5XJUM/edit?gid=0#gid=0"
    };

    let invalidAttempts = 0;

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

    // Función para mostrar un Google Sheet en el sheetContainer
    function showSheet(url) {
        closeSheets();
        sheetContainer.innerHTML = `
            <iframe src="${url}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
        `;
        sheetContainer.style.display = 'block';
    }

    // Función para mostrar los Google Sheets específicos para "Tablero de Gestión"
    function showManagementSheets(sheetUrl) {
        closeSheets();
        sheetContainer.innerHTML = `
            <div>
                <h3>CLIENTES</h3>
                <iframe src="${clientDashboardUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
            </div>
            <div style="margin-top: 20px;">
                <h3>HISTORIAL DE GESTIONES</h3>
                <iframe src="${sheetUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
            </div>
        `;
        sheetContainer.style.display = 'block';
    }

    // Función para mostrar el popup de ID de usuario
    function requestUserId() {
        let userId;
        let isValidId = false;

        while (!isValidId && invalidAttempts < 2) {
            userId = prompt("Ingrese ID de usuario:");
            if (userId in managementDashboardUrls) {
                isValidId = true;
                invalidAttempts = 0; // Reiniciar el contador de intentos inválidos
                showManagementSheets(managementDashboardUrls[userId]);
            } else {
                invalidAttempts++;
                if (invalidAttempts === 1) {
                    alert("ID inexistente, presta atención a lo que escribís");
                } else if (invalidAttempts === 2) {
                    alert("Daaale flaco, 2 veces mal... revisa y volve más tarde, chau chau chaaauuuuu");
                }
            }
        }
        if (!isValidId) {
            invalidAttempts = 0; // Reiniciar el contador después de dos intentos
        }
    }

    // Eventos para los botones
    manageLeadBtn.addEventListener('click', function() {
        showForm(manageLeadUrl);
    });

    interestedDashboardBtn.addEventListener('click', function() {
        showSheet(interestedDashboardUrl); // Usar la función showSheet para mostrar Onboarding
    });

    managementDashboardBtn.addEventListener('click', function() {
        requestUserId(); // Mostrar popup de ID al hacer clic en "Tablero de Gestión"
    });

    // Cerrar botón para interestedDashboard
    closeInterestedBtn.addEventListener('click', function() {
        closeSheets();
    });

    // Cerrar botón para managementDashboard
    closeManagementBtn.addEventListener('click', function() {
        closeSheets();
    });

    //  Evento para abrir el formulario de "Orden de Compra"
    newOrderPurchaseBtn.addEventListener('click', function() {
        newOrderContainer.style.display = 'block';
        newOrderIframe.src = orderPurchaseUrl;
    });
    // Función para cerrar el formulario de Orden de Compra
    closeOrderPurchaseBtn.addEventListener('click', function() {
        newOrderContainer.style.display = 'none';
        newOrderIframe.src = '';
    });


});
