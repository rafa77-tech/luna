document.addEventListener('DOMContentLoaded', (event) => {
    
    // Seleciona o banner de cookies
    const cookieBanner = document.getElementById('cookie-banner');
    
    // Seleciona os botões de aceitar e recusar cookies
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');
    
    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Mostra o banner de cookies se ainda não aceitou
        cookieBanner.style.display = 'block';
    }
    
    // Evento de clique para aceitar os cookies
    acceptCookiesButton.addEventListener('click', () => {
        // Armazena a aceitação dos cookies no localStorage
        localStorage.setItem('cookiesAccepted', 'true');
        
        // Oculta o banner de cookies
        cookieBanner.style.display = 'none';
    });
    
    // Evento de clique para recusar os cookies
    declineCookiesButton.addEventListener('click', () => {
        // Você pode adicionar a lógica para recusar os cookies aqui, se necessário
        // Por exemplo, redirecionar para uma página de privacidade
        console.log('Cookies recusados');
        
        // Oculta o banner de cookies
        cookieBanner.style.display = 'none';
    });

    // Evento de clique para os cabeçalhos do acordeão
    document.querySelectorAll(".accordion-header").forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Evento de clique para o link 'servicos-link'
    const servicosLink = document.getElementById('servicos-link');
    const submenuServicos = document.getElementById('submenu-servicos');

    servicosLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (submenuServicos.style.display === 'none' || submenuServicos.style.display === '') {
            submenuServicos.style.display = 'block';
        } else {
            submenuServicos.style.display = 'none';
        }
    });

    // Fecha o submenu se clicar fora
    document.addEventListener('click', (e) => {
        if (e.target !== servicosLink && e.target !== submenuServicos) {
            submenuServicos.style.display = 'none';
        }
    });

    // Adiciona o evento de clique aos botões com a classe 'botao-modal' para o modal formulario
    document.querySelectorAll('.botao-modal').forEach(function(botao) {
        botao.addEventListener('click', function() {
            document.getElementById('modalFormulario').style.display = 'flex';
        });
    });

    // Adiciona o evento de clique aos links com a classe 'botao-modal-contato' para o modal contato
    document.querySelectorAll('.botao-modal-contato').forEach(function(link) {
        link.addEventListener('click', function() {
            document.getElementById('modalContato').style.display = 'flex';
        });
    });

    // Fecha os modais quando o usuário clica fora do modal
    window.onclick = function(event) {
        if (event.target == document.getElementById('modalFormulario')) {
            document.getElementById('modalFormulario').style.display = 'none';
        }
        if (event.target == document.getElementById('modalConfirmacao')) {
            document.getElementById('modalConfirmacao').style.display = 'none';
        }
        if (event.target == document.getElementById('modalContato')) {
            document.getElementById('modalContato').style.display = 'none';
        }
    }

    // Adiciona o evento de envio ao formulário de inscrição
    const formulario = document.getElementById('formularioInscricao');
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Prepara os dados do formulário para envio
        const formData = new FormData(this);

        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let json = JSON.stringify(object);
        

        // Realiza uma requisição AJAX para enviar os dados
        fetch('/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Definindo o tipo de conteúdo
            },
            body: json // Enviando dados como JSON
        })
        .then(response => response.json())
        .then(data => {
            // Fecha o modal de formulário
            document.getElementById('modalFormulario').style.display = 'none';

            // Exibe o modal de confirmação com a mensagem de sucesso
            document.getElementById('modalConfirmacao').style.display = 'flex';
            document.getElementById('mensagemConfirmacao').innerText = 'Cadastro realizado com sucesso!';
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
        });
    });
});

// Evento de envio ao formulário de email
const formularioEmail = document.getElementById('formulario_email');
formularioEmail.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Prepara os dados do formulário para envio
    const formData = new FormData(this);

    let object = {};
    formData.forEach((value, key) => object[key] = value);
    let json = JSON.stringify(object);

    // Realiza uma requisição AJAX para enviar os dados
    fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Definindo o tipo de conteúdo
        },
        body: json // Enviando dados como JSON
    })
    .then(response => response.json())
    .then(data => {
        // Fecha o modal de formulário de email
        document.getElementById('modalFormulario').style.display = 'none';

        // Exibe o modal de confirmação com a mensagem de sucesso
        document.getElementById('modalConfirmacao').style.display = 'flex';
        document.getElementById('mensagemConfirmacao').innerText = 'Cadastro realizado com sucesso!';
    })
    .catch(error => {
        console.error('Erro ao enviar formulário de email:', error);
    });
});

    // Adiciona o evento de envio ao formulário de contato
    const formulario_contato = document.getElementById('contato');
    formulario_contato.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Prepara os dados do formulário para envio
        const formData = new FormData(this);

        let object = {};
        formData.forEach((value, key) => object[key] = value);
        let json = JSON.stringify(object);
        

        // Realiza uma requisição AJAX para enviar os dados
        console.log(json)
        fetch('/cadastro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Definindo o tipo de conteúdo
            },
            body: json // Enviando dados como JSON
        })
        .then(response => response.json())
        .then(data => {
            // Fecha o modal de formulário
            document.getElementById('modalContato').style.display = 'none';

            // Exibe o modal de confirmação com a mensagem de sucesso
            document.getElementById('modalConfirmacao').style.display = 'flex';
            document.getElementById('mensagemConfirmacao').innerText = 'Cadastro realizado com sucesso!';
        })
        .catch(error => {
            console.error('Erro ao enviar formulário:', error);
        });


});