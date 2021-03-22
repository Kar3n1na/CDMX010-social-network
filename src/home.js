import { onNavigate } from '../main.js';

 export const homePage = (container) => {
    const html = `<nav class=navbar-logo><i id="account_circle1" class="material-icons"> account_circle</i>
    <i id="menu-ham" class="material-icons">menu</i>
    </nav>
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
