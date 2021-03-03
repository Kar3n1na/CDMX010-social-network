//Vista del LogIn
import { onNavigate } from '../main.js';

 export const logIn = () => {
   return `<div class="logInForm">
       <img src="ecoFreaksLogo.png">
      <form action="/" id="sign-in-form">
      <label for="userName">Usuario</label>
      <input id="userName" name="userName" type="text" placeholder="Tu nombre aqui" required>
      <br>  
      <label for="userMail">Email</label>
      <input id="userMail" name="userMail" type="email" placeholder="usuario@algo.com" required>
      <br>
      <button type="submit" id="submitBtn">Ingresar</button>
    </form>
    </div>
    `
  };

/* //validación de email
  const email = document.getElementById("userMail");
  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
    } else {
      email.setCustomValidity("");
    }
  });

  const validityemail = ()=>{
   if (email.validity.typeMismatch) {
      email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
    } else {
      email.setCustomValidity("");
    }
    return true
  } */

  // Aqui el Router
window.addEventListener('DOMContentLoaded', () => {
     const sendButton = document.getElementById('submitBtn');
     sendButton.addEventListener('click', (e) => {
         e.preventDefault();
         const username= document.getElementById('userName');
         const usermail= document.getElementById('userMail');
         let usuarios = [
            {
               usuario: username.value,
               email: usermail.value,
            }]; 
         localStorage.setItem('user', JSON.stringify(usuarios));
         onNavigate('/home');
     })
  }); 

