import { setHtml } from './components/sethtmlPost.js'

export const postPage = (container) => {
  const html = `<nav><i id="account_circle1" class="material-icons"> account_circle</i>
  <i id="menu-ham" class="material-icons">menu</i>
  </nav>
  <div id="post-input">
  <form id="formulario">
  <label>Compartenos tus maravillosos tips</label>
  <input type="text" id="post-text">
  <button type="submit">Publicar</button>
</form> </div>
<div id="listaPost"></div>`

 container.innerHTML = html 

  //Acá guarda el formulario 
  const formularioUI = document.getElementById('formulario');

  //Aqui guarda lo recibido en la seccion donde se imprimen las actividades
  const showPost = document.getElementById('listaPost');
  //Aqui se almacena todo lo guardado por el usuario en un "Array" no necesita llamarse "array"
  let savePost = [];
  //Funciones 
    const crearItem = (post) => {
    const saveUser = JSON.parse(localStorage.getItem('user'));
    let item = {
      post: post,
      user: saveUser[0].usuario
    }
    savePost.push(item);
    return item;
  }

  const saveDB = () => {
    //Aqui rutina es unicamente un identificador
    localStorage.setItem('recentPost', JSON.stringify(savePost))
    printDB();
  }
 
  const printDB = () => {
    showPost.innerHTML = '';
    savePost = JSON.parse(localStorage.getItem('recentPost'));
    if (savePost === null) {
      savePost = [];
    } else {
      savePost.forEach(element => {
        showPost.innerHTML += setHtml(element)
      });
    }
  }

  const deleteDB = (post) => {
    let indexArray;
    savePost.forEach((element, index) => {
      //Aqui se puede utilizar Find Index
      if (element.post === post) {
        indexArray = index;
      }
    }
    );
    savePost.splice(indexArray, 1);
    saveDB()
  }

  const editDB = (post) => {
    let indexArray = savePost.findIndex((element) => {
      return (element.post === post);
    })
    const element = savePost[indexArray];
    const midiv = document.getElementById('listaPost');
    midiv.innerHTML = `
     <textarea>${element.post}</textarea>
     <i class="material-icons">save</i></
       `
  }
  //EventListener

  formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#post-text').value;
    //Aqui crear Item recibe lo almacenado en actividadIU o en el id actividad del input del formulario
    crearItem(actividadUI);
    saveDB();
    formularioUI.reset();
  });

  document.addEventListener('DOMContentLoaded', printDB);

  showPost.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.innerHTML === 'delete' || e.target.innerHTML === 'description') {

      let texto = e.path[2].childNodes[3].innerHTML;

      if (e.target.innerHTML === 'delete') {

        deleteDB(texto);
      }
      if (e.target.innerHTML === 'description') {
        // Accción de editar
        editDB(texto);
      }
    }});
  };
