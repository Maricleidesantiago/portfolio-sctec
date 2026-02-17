// SCROLL SUAVE NO MENU

//Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('.menu a');

//Adiciona o evento de clique em cada link
linksMenu.forEach(link => {
  link.addEventListener('click', function (e) {
 //Impede o comportamento padrao do link   
    e.preventDefault();
//Busca o destino pelo href
    const destino = document.querySelector(this.getAttribute('href'));
//Faz a rolagem suave até a seção    
    destino.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// FORMULÁRIO - VALIDAÇÃO E FEEDBACK

//Capatura o formulário
const form = document.getElementById('form-contato');

//Adiciona o evento de envio do formulário
form.addEventListener('submit', function (e) {

//Evita o recarregamento da página    
  e.preventDefault();

//Captura os valores digitados nos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

//Faz verificação se algum campo está vazio
  if (nome === '' || email === '' || mensagem === '') {
    alert('⚠️ Por favor, preencha todos os campos.');
    return;
  }

//Faz verificação se o e-mail é valido
  if (!email.includes('@')) {
    alert('⚠️ Digite um e-mail válido.');
    return;
  }
//Exibe uma mensagem de sucesso
  alert('✅ Mensagem enviada com sucesso! Obrigada pelo contato.');

//Limpa os campos do formulário  
  form.reset();
});


// ANIMAÇÃO AO APARECER NA TELA

//Captura todos os elementos com a classe "bloco"
const elementos = document.querySelectorAll('.bloco');

//Criaa o observador de interseção
const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {
//Se o elemento estiver visível
    if (entry.isIntersecting) {
      entry.target.classList.add('mostrar');
    }

  });

});
//Observa todos os elementos
elementos.forEach(el => {
  observer.observe(el);
});
