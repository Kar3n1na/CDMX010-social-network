//Vista del LogIn
import { onNavigate } from '../main.js';

export const logIn = (container) => {
  const html = `<div class="logInForm">
       <img src="ecoFreaksLogo.png">
      <form action="/" id="sign-in-form">
      <label for="userName">Usuario</label>
      <input id="userName" name="userName" type="text" placeholder="Tu nombre aqui">
      <br>  
      <label for="userMail">Email</label>
      <input id="userMail" name="userMail" type="email" placeholder="usuario@algo.com">
      <br>
      <button type="submit" id="submitBtn">Ingresar</button>
    </form>
    </div>
    `
  container.innerHTML = html
  const sendButton = document.getElementById('submitBtn');
  sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('userName');
    const usermail = document.getElementById('userMail');
    let usuarios = [
      {
        usuario: username.value,
        email: usermail.value,
      }];
    localStorage.setItem('user', JSON.stringify(usuarios));
    onNavigate('/home');
  })
};



