//----------------------------------------------------------------------------------

class Usuario {
  constructor(userName, datosUsuario) {
    //Toma datos del archivo Json
    this.datos = datosUsuario
    //Atributos:

    this.userName = userName
    this.fotoPerfil = this.datos.fotoPerfil
    this.estado = this.datos.estado
    this.seguidores = this.datos.seguidores //Array de objetos-seguidores(tienen un no bre y foto de perfil)
    this.seguidos = this.datos.seguidos //Array de objetos-seguidores(tienen un no bre y foto de perfil)
    this.posts = this.datos.posts //Array de objetos de post {idPost,fotoPost,descripcionPost,fecha,hora} //Mas adelante agrego el resto
    this.historias = this.datos.historias //Arrat de objetos historias {id historia, fotoHistoria,feacha,hora}
    
  }

  //Getters
  getUserName = () => this.userName;
  getRegistros = () => this.datos; //Retorna objeto usuario.
  getFotoPerfil = () => this.fotoPerfil; // Retorna foto de perfil.
  getEstado = () => this.estado;
  getSeguidores = () => this.seguidores; //Array de objetos-seguidores(tienen un no bre y foto de perfil)
  getSeguidos = () => this.seguidos; //Array de objetos-seguidores(tienen un no bre y foto de perfil)
  getPosts = () => this.posts; //Array de objetos de post {idPost,fotoPost,descripcionPost,fecha,hora} //Mas adelante agrego el resto
  getPostLikesArray =  (idPost) =>{ return this.getPosts().filter(x=> x.postID == idPost)} //Devuelvo el array de likes.
  //getCantLikesPost = (idPost) => { return this.getPostLikesArray(idPost)}


  
}



//DATOS DE UN USUARIO ----------------------------------------------------------------------------------------------------------------//

let unUsuario = {
  userName: "gui24xr",
  fotoPerfil:
    "https://s3.amazonaws.com/bikepics.com/Pics-Web/2015/07/08/bikepics-2749152-full.jpg",
  estado: "Hola. Estoy usando Messenger !!",
  posts: [
    {
      postID: 1,
      fecha: "20/09/23",
      hora: "09:30",
      texto: "Hola amigo. Como estas?",
      foto: "https://s3.amazonaws.com/bikepics.com/Pics-Web/2020/04/23/bikepics-2818235-full.jpg",
      likes: ['usuario1','usuario2','usuario3'],
    },
    {
      postID: 7,
      fecha: "20/09/23",
      hora: "09:30",
      texto: "Hola amigo. Como estas?",
      foto: "https://bikepics.com/wp-content/uploads/2023/03/How-Much-Does-It-Cost-to-Change-Motorcycle-Tires-1024x683.jpg.webp",
      likes: ['usuario1','usuario2','usuario3'],
    },
    {
      postID: 2,
      fecha: "20/09/23",
      hora: "09:35",
      texto: "Buenos dia",
      foto: "https://bikepics.com/wp-content/uploads/2023/06/LS2-Helmets-Assault-Full-Face-Motorcycle-Helmet-W_SunShield-1.webp",
      likes: ['usuario1','usuario3','usuario4'],
    },
    {
      postID: 3,
      fecha: "20/09/23",
      hora: "09:33",
      texto: "Hoy es Martes",
      foto: "https://bikepics.com/wp-content/uploads/2023/06/7-Best-Motorcycle-Helmet-Cost-Average-Cost-of-Motorcycle-Helmets-1024x683.webp",
      likes: ['usuario1','usuario2','usuario3','usuario4'],
    },
    {
      postID: 5,
      fecha: "20/09/23",
      hora: "09:33",
      texto: "Hoy es Martes",
      foto: "https://s3.amazonaws.com/bikepics.com/Pics-Web/2014/03/04/bikepics-2647805-full.jpg",
      likes: ['usuario1','usuario2','usuario3','usuario4'],
    },
    {
      postID: 3,
      fecha: "20/09/23",
      hora: "09:33",
      texto: "Hoy es Martes",
      foto: "https://s3.amazonaws.com/bikepics.com/Pics-Web/2016/09/27/bikepics-2794067-full.jpg",
      likes: ['usuario1','usuario2','usuario3','usuario4'],
    },
    {
      postID: 6,
      fecha: "20/09/23",
      hora: "09:33",
      texto: "Hoy es Martes",
      foto: "https://bikepics.com/wp-content/uploads/2023/04/9kwhpigr4na-1-1024x683.jpg.webp",
      likes: ['usuario1','usuario2','usuario3','usuario4','Pepe','Ramon'],
    },
  ],

  historias: [
    {
      fecha: "20/09/23",
      hora: "09:30",
      texto: "Hola amigo. Como estas?",
      foto: "https://bikepics.com/wp-content/uploads/2023/03/How-Much-Does-It-Cost-to-Change-Motorcycle-Tires-1024x683.jpg.webp",
    },
    {
      fecha: "20/09/23",
      hora: "09:35",
      texto: "Burn dia",
      foto: "https://www.nobbot.com/wp-content/uploads/2023/09/PD-137x137.jpg",
    },
    {
      fecha: "20/09/23",
      hora: "09:33",
      texto: "Hoy es Martes",
      foto: "https://www.nobbot.com/wp-content/uploads/2023/09/PD-137x137.jpg",
    },
  ],

  seguidores: [
    {
      nombreUsuario: "seguidor1",
      fotoPerfil:
        "https://nagoregarciasanz.com/wp-content/uploads/2021/01/foto_blog_nagore@2x.jpg",
    },
    {
      nombreUsuario: "seguidor2",
      fotoPerfil:
        "https://imgs.search.brave.com/uEzDD6iava2w3gwayzZl77YQTKAglSyTa7lcgrXtcC0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2RlbGZvdG9n/cmFmby5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/bG9iby1mb3RvLXBl/cmZpbC53ZWJw",
    },
  ],

  seguidos: [
    {
      nombreUsuario: "seguido24",
      fotoPerfil:
        "https://imgs.search.brave.com/539We53vkPSt__WdfxyxBWn3smsNKXhLYsV7rvDQ5sE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2RlbGZvdG9n/cmFmby5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/Z2F0by1kaXZlcnRp/ZG8ud2VicA",
    },
    {
      nombreUsuario: "seguidor25",
      fotoPerfil:
        "https://imgs.search.brave.com/-Dh5TEqCNHZJVwnmVyGQ4K5-DPrKFefWAS3ZzoohXus/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxvZ2RlbGZvdG9n/cmFmby5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDEv/cGVycm8tZ2FmYXMu/d2VicA",
    },
  ],
};
//----------------------------------------------------------------------------------------------------------------------



