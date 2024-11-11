// LINK DA API: https://pixabay.com/api/docs/

let paginaAtual = 1;

document.getElementById('carregarImagens').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://pixabay.com/api/?key=47026210-87635a6cbeb3e31a183330eb7&q=paisagens&image_type=photo&per_page=12&page=${paginaAtual}`, true);
  xhr.onload = () => {
    const dados = JSON.parse(xhr.responseText);

    dados.hits.forEach(imagem => {
      const img = document.createElement('img');
      img.src = imagem.webformatURL;
      img.alt = imagem.tags;

      const divImagem = document.createElement('div');
      divImagem.className = 'imagem';
      divImagem.appendChild(img);

      document.getElementById('galeria').appendChild(divImagem);
    });

    paginaAtual++;
  };
  xhr.send();
});

