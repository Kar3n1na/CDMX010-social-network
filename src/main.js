// Este es el punto de entrada de tu aplicacion

import { logIn } from './lib/logIn.js';
import { homePage } from '/home.js';
import { postPage } from '/post.js';

const routes = {
  '/': logIn,
  '/home': homePage,
  '/post': postPage,
};

const rootDiv = document.getElementById('root')

const logInComponent = routes[window.location.pathname]
logInComponent(rootDiv)

export function onNavigate(pathname) {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  const component = routes[pathname];
  component(rootDiv)
}