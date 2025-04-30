document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('formContainer');
    const formIframe = document.getElementById('formIframe');
    const manageLeadBtn = document.getElementById('manageLeadBtn');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const sheetContainer = document.getElementById('sheetContainer');
    const interestedDashboardBtn = document.getElementById('interestedDashboardBtn');
    const closeInterestedBtn = document.getElementById('closeInterestedBtn');
    const managementDashboardBtn = document.getElementById('managementDashboardBtn');
    const closeManagementBtn = document.getElementById('closeManagementBtn');

    const newOrderContainer = document.getElementById('newOrderContainer');
    const newOrderIframe = document.getElementById('newOrderIframe');
    const orderTypeSelect = document.getElementById('orderTypeSelect');
    const openOrderBtn = document.getElementById('openOrderBtn');
    const closeOrderPurchaseBtn = document.getElementById('closeOrderPurchaseBtn');

    const orderPurchaseUrlPublicidad = 'https://docs.google.com/forms/d/e/1FAIpQLScMy2Bp_A05z489rihoj5OUn4LMIyZ7z8rgKfM0TGF4ZnKTvA/viewform';
    const orderPurchaseUrlSsWeb = 'https://docs.google.com/forms/d/e/1FAIpQLScXsEjsbdK56Y5T4qWqk0v1IbC/viewform';

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

    function showLeadForm(url) {
        formContainer.style.display = 'block';
        formIframe.src = url;
        formIframe.style.marginLeft = '10px';
        formIframe.style.marginRight = '10px';
        formContainer.style.marginTop = '30px';
    }

    function showOrderForm(url) {
        newOrderContainer.style.display = 'block';
        newOrderIframe.src = url;
        newOrderIframe.style.marginLeft = '10px';
        newOrderIframe.style.marginRight = '10px';
        newOrderContainer.style.marginTop = '30px';
    }

    function showSheet(url) {
        closeSheets();
        sheetContainer.innerHTML = `<div id="iframeWrapper" style="width: 100%; height: 600px; overflow: hidden;">
            <iframe id="dynamicIframe" style="width: 100%; height: 600px; border: none;"></iframe>
        </div>`;
        sheetContainer.style.display = 'block';
        const iframe = document.getElementById('dynamicIframe');
        iframe.addEventListener('load', function onLoad() {
            iframe.removeEventListener('load', onLoad);
            document.getElementById('tablerosSection').scrollIntoView({ behavior: 'smooth' });
        });
        iframe.src = url;
    }

    function showManagementSheets(sheetUrl) {
        closeSheets();
        sheetContainer.innerHTML = `
        <div>
            <h3 class="text-center mb-4">CLIENTES Y HISTORIAL DE GESTIONES</h3>
            <div style="display: flex; width: 100vw; height: 600px; overflow: hidden; margin-left: calc(-50vw + 50%);">
                <div style="width: 50vw; height: 100%; overflow: hidden;">
                    <iframe id="clientIframe" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
                <div style="width: 50vw; height: 100%; overflow: hidden;">
                    <iframe id="historialIframe" style="width: 100%; height: 100%; border: none;"></iframe>
                </div>
            </div>
        </div>`;
    

    
        sheetContainer.style.display = 'block';
        const clientIframe = document.getElementById('clientIframe');
        const historialIframe = document.getElementById('historialIframe');
        clientIframe.addEventListener('load', function onLoad() {
            clientIframe.removeEventListener('load', onLoad);
            document.getElementById('tablerosSection').scrollIntoView({ behavior: 'smooth' });
        });
        historialIframe.addEventListener('load', function onLoad() {
            historialIframe.removeEventListener('load', onLoad);
            document.getElementById('tablerosSection').scrollIntoView({ behavior: 'smooth' });
        });
        clientIframe.src = clientDashboardUrl;
        historialIframe.src = sheetUrl;
    }

    function closeSheets() {
        sheetContainer.style.display = 'none';
        sheetContainer.innerHTML = '';
    }

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

    manageLeadBtn.addEventListener('click', function () {
        showLeadForm(manageLeadUrl);
    });

    interestedDashboardBtn.addEventListener('click', function (e) {
        e.preventDefault();
        showSheet(interestedDashboardUrl);
    });

    managementDashboardBtn.addEventListener('click', function (e) {
        e.preventDefault();
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
