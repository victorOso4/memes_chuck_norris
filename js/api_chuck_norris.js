function cargarFraseChuckNorris() {
  $.get('http://api.icndb.com/jokes/random', function(data) {
    let mostrarFrase = `
    <h3>Frases Chuck Norris</h3>

    <div class="card-panel">
      <h6>id: ${data.value.id}</h6>
      <h4>
        <span class="blue-text text-darken-2">
          ${data.value.joke}
        </span>
      </h4>
      <h5>Categorias: ${data.value.categories}</h5>
    </div>`;
    document.querySelector('#frase-chuck').innerHTML = mostrarFrase;
  });
}
