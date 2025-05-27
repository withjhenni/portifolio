fetch('qualificacoes.json')
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById('lista-qualificacoes');
    data.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      lista.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar as qualificações:', error);
  });
