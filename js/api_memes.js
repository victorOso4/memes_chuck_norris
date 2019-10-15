function cargarMemes() {
  $.get('https://api.imgflip.com/get_memes', function(data) {
    let tabla = document.getElementById('tabla-memes');

    let filas = `
    <thead>
      <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ver</th>
      </tr>
    </thead>`;

    filas += `<tbody>`;
    for (var i = 0; i < data.data.memes.length; i++) {
      filas += `
      <tr>
        <td>${data.data.memes[i].id}</td>
        <td>${data.data.memes[i].name}</td>
        <td><img class="responsive-img" src="${data.data.memes[i].url}" width="50" height="50"></td>
        <td><a id="meme-${i}" class="btn-floating pulse cyan ver-meme"><i class="material-icons">remove_red_eye</i></a></td>
      </tr>`;
    }
    filas += `</tbody>`;
    tabla.innerHTML = filas;

    let botonVerMeme = document.getElementById('tabla-memes').getElementsByClassName('ver-meme');
    for (var i = 0; i < botonVerMeme.length; i++) {
      botonVerMeme[i].addEventListener("click", function clickVerMeme(evt) {
        let idBotonVerMeme = this.id;
        let idMeme = idBotonVerMeme.split('-')[1];

        $.get('https://api.imgflip.com/get_memes', function(data) {
          document.getElementById('imagen-detalle-meme').src = data.data.memes[idMeme].url;
          document.getElementById('nombre-detalle-meme').innerHTML = data.data.memes[idMeme].name;
          document.getElementById('id-detalle-meme').innerHTML = 'Id: ' + data.data.memes[idMeme].id;

          document.querySelector('#listar-memes').addEventListener("click", cargarMemes);

          document.getElementById('detalle-meme').style.display = 'block';
          document.getElementById('listado-memes').style.display = 'none';
        });
      });
    }

    document.getElementById('listado-memes').style.display = 'block';
    document.getElementById('detalle-meme').style.display = 'none';
  });
}
