function selectService(service) {

    var imageElement = document.getElementById('serviceImage');
    var descriptionElement = document.getElementById('serviceDescription');

    switch (service) {

        case 'service1':
            imageElement.src = 'imagens/Serviço1.png';
            descriptionElement.textContent = 'Descrição do Serviço 1: Esta é uma descrição detalhada do Serviço 1.';
            break;
        case 'service2':
            imageElement.src = 'imagens/Serviço2.png';
            descriptionElement.textContent = 'Descrição do Serviço 2: Aqui está uma breve explicação do Serviço 2.';
            break;
        case 'service3':
            imageElement.src = 'imagens/Serviço3.png';
            descriptionElement.textContent = 'Descrição do Serviço 3: Descrição completa do Serviço 3.';
            break;
        case 'service4':
            imageElement.src = 'imagens/Serviço4.png';
            descriptionElement.textContent = 'Descrição do Serviço 4: Detalhes do Serviço 4 serão mostrados aqui.';
            break;
        case 'service5':
            imageElement.src = 'imagens/Serviço5.png';
            descriptionElement.textContent = 'Descrição do Serviço 5: Informações importantes sobre o Serviço 5.';
            break;
        case 'service6':
            imageElement.src = 'imagens/Serviço6.png';
            descriptionElement.textContent = 'Descrição do Serviço 6: Uma breve descrição do Serviço 6.';
            break;
        default:
            imageElement.src = 'imagens/Delta AB.png';
            descriptionElement.textContent = 'Descrição padrão: Esta é uma descrição padrão para o serviço.';
            break;

    }
}

