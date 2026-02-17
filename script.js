// SCROLL SUAVE NO MENU
const linksMenu = document.querySelectorAll('.menu a');

linksMenu.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute('href'));

    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// FORMULÁRIO - VALIDAÇÃO E FEEDBACK
const form = document.getElementById('form-contato');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '' || email === '' || mensagem === '') {
    alert('⚠️ Por favor, preencha todos os campos.');
    return;
  }

  if (!email.includes('@')) {
    alert('⚠️ Digite um e-mail válido.');
    return;
  }

  alert('✅ Mensagem enviada com sucesso! Obrigada pelo contato.');

  form.reset();
});


// ANIMAÇÃO AO APARECER NA TELA
const elementos = document.querySelectorAll('.bloco');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    }

  });

});

elementos.forEach(el => {
  observer.observe(el);
});
