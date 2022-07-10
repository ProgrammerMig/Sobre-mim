
function multiplica(num1,num2) {
    let resultado = num1 * num2;
    return resultado;
  }

  document.querySelector('img').onclick = function() {
    alert('Ai! Pare de me cutucar!');
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu primeiro nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Olá! eu sou o Miguel, é um prazer te conhecer, ' + meuNome;
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Olá! eu sou o Miguel, é um prazer te conhecer, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }

  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu primeiro nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Olá! eu sou o Miguel, é um prazer te conhecer, ' + meuNome;
    }
  }
