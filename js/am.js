document.addEventListener('DOMContentLoaded', function () {
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

    // Orden de Compra
    const newOrderContainer = document.getElementById('newOrderContainer');
    const newOrderIframe = document.getElementById('newOrderIframe');
    const orderTypeSelect = document.getElementById('orderTypeSelect');
    const openOrderBtn = document.getElementById('openOrderBtn');
    const closeOrderPurchaseBtn = document.getElementById('closeOrderPurchaseBtn');

    // URLs
    const orderPurchaseUrlPublicidad = 'https://docs.google.com/forms/d/e/1FAIpQLScMy2Bp_A05z489rihoj5OUn4LMIyZ7z8rgKfM0TGF4ZnKTvA/viewform';
    const orderPurchaseUrlSsWeb = 'https://docs.google.com/forms/d/e/1FAIpQLScXsEjsbdK56Y5T4qWqk0v1IbC/viewform'; // Por agregar

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

    // Mostrar formulario en sección "Formularios"
    function showLeadForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formIframe.style.marginLeft = '10px';
        formIframe.style.marginRight = '10px';
        formContainer.style.marginTop = '30px';
    }

    // Mostrar formulario en sección "Orden de Compra"
    function showOrderForm(url) {
        newOrderContainer.style.display = 'block';
        newOrderIframe.src = url;
        newOrderIframe.style.marginLeft = '10px';
        newOrderIframe.style.marginRight = '10px';
        newOrderContainer.style.marginTop = '30px';
    }

    // Mostrar un Sheet en contenedor
    function showSheet(url) {
        closeSheets();
        sheetContainer.innerHTML = `
            <iframe src="${url}" style="width: calc(100% - 20px); height: 600px; border: none; margin-left: 10px; margin-right: 10px;"></iframe>
        `;
        sheetContainer.style.display = 'block';
    }

    // Mostrar dos Sheets para gestión
    function showManagementSheets(sheetUrl) {
        closeSheets();
        sheetContainer.innerHTML = `
            <div>
                <h3>CLIENTES</h3>
                <iframe src="${clientDashboardUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin: 0 10px;"></iframe>
            </div>
            <div style="margin-top: 20px;">
                <h3>HISTORIAL DE GESTIONES</h3>
                <iframe src="${sheetUrl}" style="width: calc(100% - 20px); height: 600px; border: none; margin: 0 10px;"></iframe>
            </div>
        `;
        sheetContainer.style.display = 'block';
    }

    // Cerrar sección de Sheets
    function closeSheets() {
        sheetContainer.style.display = 'none';
        sheetContainer.innerHTML = '';
    }

    // Popup para ingresar ID de usuario
    function requestUserId() {
        let userId;
        let isValidId = false;

        while (!isValidId && invalidAttempts < 2) {
            userId = prompt("Ingrese ID de usuario:");
            if (userId in managementDashboardUrls) {
                isValidId = true;
                invalidAttempts = 0;
                showManagementSheets(managementDashboardUrls[userId]);
            } else {
                invalidAttempts++;
                if (invalidAttempts === 1) {
                    alert("ID inexistente, presta atención a lo que escribís");
                } else {
                    alert("Daaale flaco, 2 veces mal... revisa y volve más tarde, chau chau chaaauuu");
                }
            }
        }

        if (!isValidId) {
            invalidAttempts = 0;
        }
    }

    // Eventos
    manageLeadBtn.addEventListener('click', function () {
        showLeadForm(manageLeadUrl);
    });

    interestedDashboardBtn.addEventListener('click', function () {
        showSheet(interestedDashboardUrl);
    });

    managementDashboardBtn.addEventListener('click', function () {
        requestUserId();
    });

    closeInterestedBtn.addEventListener('click', closeSheets);
    closeManagementBtn.addEventListener('click', closeSheets);
    closeFormBtn.addEventListener('click', function () {
        formContainer.style.display = 'none';
        formIframe.src = '';
    });
    closeOrderPurchaseBtn.addEventListener('click', function () {
        newOrderContainer.style.display = 'none';
        newOrderIframe.src = '';
    });

    openOrderBtn.addEventListener('click', function () {
        const selectedValue = orderTypeSelect.value;
        if (selectedValue === "OC Publicidad") {
            showOrderForm(orderPurchaseUrlPublicidad);
        } else if (selectedValue === "OC Ss Web") {
            showOrderForm(orderPurchaseUrlSsWeb);
        } else {
            alert("Por favor, selecciona un tipo de orden de compra.");
        }
    });

    orderTypeSelect.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue === "OC Publicidad") {
            showOrderForm(orderPurchaseUrlPublicidad);
        } else if (selectedValue === "OC Ss Web") {
            showOrderForm(orderPurchaseUrlSsWeb);
        } else {
            newOrderContainer.style.display = 'none';
            newOrderIframe.src = '';
        }
    });
});
