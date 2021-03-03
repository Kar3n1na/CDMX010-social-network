// Este es el punto de entrada de tu aplicacion

import { logIn } from './lib/logIn.js';
import {homePage} from '/home.js';
import {postPage} from '/post.js';


const bienvenida= logIn();
const home= homePage();
const post= postPage();

const routes ={
  '/': bienvenida,
  '/home': home,
  '/post': post,
};

let rootDiv = document.getElementById('root')

export function onNavigate(pathname){
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  rootDiv.innerHTML = routes[window.location.pathname];
} 

onNavigate(window.location.pathname);

//startBtn.addEventListener('click', (function))

//storage.setItem(usuario, value)