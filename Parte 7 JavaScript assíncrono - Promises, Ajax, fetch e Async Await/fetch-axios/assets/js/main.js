/* fetch('pessoas.json')
  .then(resposta => resposta.json())
  .then(json => carregaElementosNaPagina(json)); */

  axios('pessoas.json')
    .then(resposta = carregaElementosNaPagina(resposta.data));

  function carregaElementosNaPagina() {
    const table = docuemnt.createElement('table');
    for(let pessoa of json) {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      
      let td1 = document.createElement('td');
      td1.innerHTML = pessoa.nome;
      tr.appendChild(td1);

      let td2 = document.createElement('td');
      td2.innerHTML = pessoa.idade;
      tr.appendChild(td2);

      let td3 = document.createElement('td');
      td3.innerHTML = pessoa.salario;
      tr.appendChild(td3)
    }

    const resulado = document.querySelector('.resultado');
    resultado.appendChild(table);
  }


