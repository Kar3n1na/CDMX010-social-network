import { setHtml } from './components/sethtmlPost.js'

export const postPage = (container) => {
  const html = `<div id="post-input">
  <label for="post-area">Post</label>
  <input type="text" id="post-area" />
  <button id="post-btn">Publicar</button>
  </div>
  <div id="posts"></div>`;
    
  container.innerHTML = html
  //Array donde se van a guardar los nuevos elementos "post"
  let postList = JSON.parse(localStorage.getItem("posting"));
  if (postList == null) {
    postList = []
  } /* else {
    
  } */
  const imprime = () => {
    const containersin = document.getElementById("posts");
    postList.forEach(posteo => {
      containersin.innerHTML += `<h1>${posteo.post}</h1>`
    })
    /*   const arrayElementos= postList.map (function (unPost) {
        return `<h1>${elements.post}</h1>`
      }); */

    /*     postList.forEach(element => {
        container2.innerHTML += setHtml(element)
      }); */
  }


  //Aca guarda los manda al array
  const createPost = (post) => {
    let item = {
      post: post,
    }
    postList.push(item);
    return item;
  }
  //Esta funcion guarda los post en el local
  const createdPost = () => {
    localStorage.setItem('posting', JSON.stringify(postList));
    //console.log(postList);
    imprime();

  }

  //Funcion del boton
  const postBtn = document.getElementById('post-btn');
  postBtn.addEventListener('click', (event) => {
    console.log("El click funciona");
    event.preventDefault();
    event.stopPropagation();
    //Aca trae el texto del input
    let newText = document.getElementById('post-area').value;
    createPost(newText);
    createdPost();
  })

};
