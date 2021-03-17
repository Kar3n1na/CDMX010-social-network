import { onNavigate } from '../main.js';

 export const homePage = (container) => {
    const html = ` <h1>Si funciono!!</>
    <button id="newPost"> Crea una publicación </button>
    `

    // renders template/component/view
    container.innerHTML = html

    // registers events
    const newPostbtn = document.getElementById('newPost');
    newPostbtn.addEventListener('click', (e) => {
      e.preventDefault();
      onNavigate('/post');
    })
};
