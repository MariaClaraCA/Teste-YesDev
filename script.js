// ------------Animação de Fade-In-----------------
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function checkVisibility() {
    var elements = document.querySelectorAll('.fade-in');
    elements.forEach(function (el) {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
document.addEventListener('DOMContentLoaded', checkVisibility);

// ------------Fim Animação de Fade-In----------------- 

// ------------Validações do Formulário----------------- 
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container form');
    const nomeMecanica = form.querySelector('input[placeholder="Nome da mecânica"]');
    const seuNome = form.querySelector('input[placeholder="Seu Nome"]');
    const numeroWhatsapp = form.querySelector('input[placeholder="Número do Whatsapp"]');
    const focoOficina = form.querySelector('select');
    const checkbox = form.querySelector('input[type="checkbox"]');

    const modal = document.getElementById('successModal');
    const closeBtn = document.querySelector('.close-btn');

    form.addEventListener('submit', function (event) {
        let valid = true;
        const errors = [];

        if (nomeMecanica.value.trim() === '' || nomeMecanica.value.length > 50) {
            errors.push('O campo "Nome da mecânica" deve ser preenchido com no máximo 50 caracteres.');
            valid = false;
        }

        if (seuNome.value.trim() === '') {
            errors.push('O campo "Seu Nome" deve ser preenchido.');
            valid = false;
        }

        const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (numeroWhatsapp.value.trim() === '' || !regexTelefone.test(numeroWhatsapp.value)) {
            errors.push('O campo "Número do Whatsapp" deve ser preenchido no formato correto: (99) 99999-9999 ou (99) 9999-9999.');
            valid = false;
        }

        if (focoOficina.value === '') {
            errors.push('Selecione o "Foco da oficina".');
            valid = false;
        }

        if (!checkbox.checked) {
            errors.push('Você deve marcar o checkbox para autorizar o tratamento dos dados.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
            alert(errors.join('\n'));
        } else {
            event.preventDefault();
            showModal();
        }
    });

    function showModal() {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    numeroWhatsapp.addEventListener('input', function (event) {
        let input = numeroWhatsapp.value.replace(/\D/g, '');
        input = input.substring(0, 11);

        if (input.length > 10) {
            input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (input.length > 5) {
            input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (input.length > 2) {
            input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            input = input.replace(/^(\d*)/, '($1');
        }

        numeroWhatsapp.value = input;
    });

    seuNome.addEventListener('input', function () {
        const regexNome = /[^a-zA-Z\s]/g;
        seuNome.value = seuNome.value.replace(regexNome, '');
    });
});

// ------------Inscrição para Novidades----------------- 
document.addEventListener('DOMContentLoaded', function () {

    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const successMessage = document.getElementById('success-message');


    newsletterForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (emailInput.value.trim() === '') {
            alert('Por favor, insira um e-mail válido.');
        } else {
            successMessage.style.display = 'block';
        }
    });
});

// ------------Controle do Modal de Demonstração-----------------

document.addEventListener('DOMContentLoaded', function () {
    const demoModal = document.getElementById('demoModal');
    const demoButton = document.querySelector('.btn-demo');
    const closeModalBtn = demoModal.querySelector('.close-btn');
    const demoForm = document.getElementById('demoForm');
    const demoNome = document.getElementById('demoNome');
    const demoEmail = document.getElementById('demoEmail');
    const demoTelefone = document.getElementById('demoTelefone');
    const demoSuccessMessage = document.getElementById('demoSuccessMessage');

    //"Solicitar Demonstração!"
    demoButton.addEventListener('click', function (event) {
        event.preventDefault();
        demoModal.style.display = 'block';
    });

    closeModalBtn.onclick = function () {
        demoModal.style.display = 'none';
        demoSuccessMessage.style.display = 'none';
        demoForm.reset();
    };

    window.onclick = function (event) {
        if (event.target === demoModal) {
            demoModal.style.display = 'none';
            demoSuccessMessage.style.display = 'none';
            demoForm.reset();
        }
    };

    demoForm.addEventListener('submit', function (event) {
        let valid = true;
        const errors = [];

        if (demoNome.value.trim() === '') {
            errors.push('O campo "Seu Nome" deve ser preenchido.');
            valid = false;
        }

        if (demoEmail.value.trim() === '') {
            errors.push('O campo "Seu Email" deve ser preenchido.');
            valid = false;
        }

        const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (demoTelefone.value.trim() === '' || !regexTelefone.test(demoTelefone.value)) {
            errors.push('O campo "Número de Telefone" deve ser preenchido no formato correto: (99) 99999-9999 ou (99) 9999-9999.');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
            alert(errors.join('\n'));
        } else {
            event.preventDefault();
            demoSuccessMessage.style.display = 'block';
        }
    });


    demoTelefone.addEventListener('input', function (event) {
        let input = demoTelefone.value.replace(/\D/g, '');
        input = input.substring(0, 11);

        if (input.length > 10) {
            input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (input.length > 5) {
            input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (input.length > 2) {
            input = input.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            input = input.replace(/^(\d*)/, '($1');
        }

        demoTelefone.value = input;
    });


    demoNome.addEventListener('input', function () {
        const regexNome = /[^a-zA-Z\s]/g;
        demoNome.value = demoNome.value.replace(regexNome, '');
    });
});
