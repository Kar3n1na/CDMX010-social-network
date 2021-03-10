import { setHtml } from './components/sethtmlPost.js'

export const postPage = (container) => {
  const html = `<div id="post-input">
    <form>
     <label for="post-area">Post</label>
    <br>
     <input type="text" id="post-area">
     <br>
      <button type="submit" id="post-btn">Publicar</button>
    </form>
    <div id="muestra-actividades"><b></b>
    </div>
    </div>
    `
  container.innerHTML = html

  let postList = JSON.parse(localStorage.getItem("posting"));
  if(postList==null){
    postList=[]
  } 
  const createPost = (post) => {
    let item = {
      post: post,
    }
    postList.push(item);
    return item;
  }
 const createdPost = () => {
    localStorage.setItem('posting', JSON.stringify(postList));
  
  } 


  postList.forEach(element => {
    container.innerHTML += setHtml(element)
  });


  const postBtn = document.getElementById('post-btn');
  postBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let newText = document.getElementById('post-area').value;
    createPost(newText);
    createdPost();
  })
  
};

// let fueraDeLocalStorage= localStorage.getItem("posting");
//Array donde se alamacena lo ingresado en el text area
/*  let postList = JSON.parse(localStorage.getItem("posting"));
if(postList==null){
  postList=[]
} */

/* const previousPost = () => {
  const listaDePost = document.getElementById('muestra-actividades');
  listaDePost.innerHTML = fueraDeLocalStorage;
  previousPost() 
}*/
  //<textarea id="post-area" name="post-area" rows="4" cols="50">
  //</textarea>  */
