//FUNCIONES DE RENDERIZADOS ---------------------------------------------------------------------------------------------

//Esta funcion recibe un post, usuario y lee todos sus datos y manipula el DOM para agregarlo a un contenedor.

let renderizarUnPost = (usuarioPost, entrada, contenedor) => {
  //Contenedor padre del post
  let containerPost = document.createElement("article");
  containerPost.className = "containerPostClass";

  //Contenedor titulo del post.
  let titleContainerPost = document.createElement("div");
  titleContainerPost.className = "titleContainerPost";

  //Contenedor intereacciones(me gusta y comentarios.) del post.
  let interaccionesContainerPost = document.createElement("div");
  interaccionesContainerPost.className = "interaccionesContainerPost";

  //Nombre de usuario post
  let userNamePosting = document.createElement("h1");
  userNamePosting.innerHTML = usuarioPost.userName;
  userNamePosting.className = "userNameTitle";

  //Img perfil.
  let imgPerfil = document.createElement("img");
  imgPerfil.src = usuarioPost.getFotoPerfil();
  imgPerfil.className = "perfilPicPost";

  //Imagen Post
  let imgPost = document.createElement("img");
  imgPost.src = entrada.foto;
  imgPost.className = "grid-item";

  //Fecha y hora post
  let fechaHora = document.createElement("h2");
  fechaHora.innerHTML = entrada.fecha + " " + entrada.hora;
  fechaHora.className = "fechaHoraPost";

  //Icono Likes
  let imgLikes = document.createElement("img");
  imgLikes.src = "./imagenes/icons/ico_like.png";
  imgLikes.className = "likesBTN";
  imgLikes.addEventListener("click", () => alert("Funcion Like"));

  //Icono boton comentarios.
  let imgComment = document.createElement("img");
  imgComment.src = "./imagenes/icons/ico_comment.png";
  imgComment.className = "commentBTN";

  //Cantidad de Likes
  let likesPostCant = document.createElement("text");
  likesPostCant.innerHTML = entrada.likes.length + " Me gusta";
  likesPostCant.className = "likes";

  //Comentario del post hecho por el usuario al momento de postear.
  let txtPost = document.createElement("p");
  txtPost.innerHTML = entrada.texto;
  txtPost.className = "textoPost";

  //A contenedor titulos
  titleContainerPost.appendChild(imgPerfil);
  titleContainerPost.appendChild(userNamePosting);

  //Seccion intereacciones
  interaccionesContainerPost.appendChild(imgLikes);
  interaccionesContainerPost.appendChild(likesPostCant);
  interaccionesContainerPost.appendChild(imgComment);

  //Agrego foto
  containerPost.appendChild(titleContainerPost);
  containerPost.appendChild(imgPost);
  containerPost.appendChild(txtPost);
  containerPost.appendChild(fechaHora);

  containerPost.appendChild(interaccionesContainerPost);

  contenedor.appendChild(containerPost);
};


// Esta  funcion toma un usuario , recorre todos sus post y renderiza uno por a uno.
const renderizarListaPosts = (unUsuario, container) => {
  let posteosUsuario = unUsuario.getPosts();

  let i = 0;

  for (i = 0; i < posteosUsuario.length; i++) {
    console.log(posteosUsuario[i].fecha);
    renderizarUnPost(unUsuario, posteosUsuario[i], container);
  }
};

//FUNCIONES INICIO SESION ----------------------------------------------------------------------------------------------

//Esta funcion maneja la barra superior. habilita menues si la sesion esta iniciada y pone foto de perfil
//Al cerrar cesion hace lo contrario.
function actualizarBarraSuperior(sesionIniciada, usuario) {
  
 let userNameBarraSuperior = document.getElementById("user_name_barra_superior"); 
 let fotoPerfilBarraSuperior = document.getElementById("foto_perfil_barra_superior");

  //Si sesion iniciada pone Imagen perfil usuario, de lo contrario una predeterminada.
  sesionIniciada
    ? (fotoPerfilBarraSuperior.src = usuario.getFotoPerfil())
    : (fotoPerfilBarraSuperior.src = "../imagenes/icons/ico_perfil.png");
  
  sesionIniciada
    ? (userNameBarraSuperior.innerText = usuario.getUserName())
    : (userNameBarraSuperior.innerText = "Iniciar sesion");

  if (sesionIniciada) habilitarMenu()

 

}

//habilita los menues si la cesion esta iniciada y agregamos evento a todos los botones.
function habilitarMenu(){

  
let userNameBarraSuperior = document.getElementById("user_name_barra_superior");
 let menuConfiguracion = document.getElementById("nav_menu_conf");
 let btnMenu = document.getElementById("btnMenu");
 let navmenuSesion = document.getElementById("nav_menu_sesion");
 let btnLogout = document.getElementById("btnLogout");
 let btnEditPerfil = document.getElementById("btnEditPerfil") 
 let btnConfig = document.getElementById("btnConfig");
 let btnAyuda = document.getElementById("btnAyuda");

btnMenu.addEventListener("mouseUp", () => menuConfiguracion.classList.toggle("nav_menu_conf"));
btnMenu.addEventListener("click", () => menuConfiguracion.classList.toggle("nav_menu_conf")  );
userNameBarraSuperior.addEventListener("click", () => { navmenuSesion.classList.toggle("nav_menu_sesion");});


btnLogout.addEventListener("click", ()=>cerrarSesion())
btnEditPerfil.addEventListener("click", ()=>alert("Aun no implementado."))
btnConfig.addEventListener("click", ()=>alert("Aun no implementado"))
btnAyuda.addEventListener("click", ()=>alert("Aun no implementado."))
  


}

function cerrarSesion(){

 

postsContainer.classList='posts-container_invisible'
loginContainer.classList='login-container'
actualizarBarraSuperior(false,"Sin Usuario");
//Faltaria eliminar eventos al cerrar cesion


}

function abrirSesion(){

//Desaparezco el formulario de inicio de sesion y visibilizo el container de los post.
postsContainer.classList.toggle('posts-container')
loginContainer.classList='posts-container_invisible'

//renderizarSitio()

let miUsuario = new Usuario("gui24XR", unUsuario);
actualizarBarraSuperior(true, miUsuario);
renderizarListaPosts(miUsuario, postsContainer);

}

//PROGRAMA PRINCIPAL
// Por medio del fomulario de login Si todo esta correcto carga el blog del ususario
function iniciarSesion(){
  
  alert("Iniciar sesion")

  /*Al tocar iniciar sesion se llama a esta funcion. Si coinciden usuario y contraseña con un usuario existente inicia sesion. 
   Pone la variable iniiciar sesion a true y guarda al usuario en el localstorage y si todo sale satisfactoria sale del container
   de inicio de sesion y renderiza el blog con los datos del usuario*/
  
  
  //Compruebo usuario y contraseña.
  let usuario = document.getElementById('login-username-input').value
  let password = document.getElementById('login-password-input').value
   
  usuario == "gui24xr" && password =='123456'
  ? abrirSesion()
  :alert("Usuario o contraseña no coinciden o no existen !")



}

var sesionIniciada = false;
 actualizarBarraSuperior(false,"Sin Usuario");

//En este container SEGUN HAYA SESION Iniciada o no pongo formulario o post del usuario.
let postsContainer = document.getElementById("postsContainer"); 
let loginContainer = document.getElementById("login-Container"); 


//------------------------Renderizacion */








function renderizarSitio(){

if (sesionIniciada) {

    let miUsuario = new Usuario("gui24XR", unUsuario);
    actualizarBarraSuperior(true, miUsuario);
    renderizarListaPosts(miUsuario, postsContainer);
   
} 
else {
    actualizarBarraSuperior(false,"Sin Usuario");
}
}