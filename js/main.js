// Variables

const formulario = document.querySelector('#formulario');
const infoUsuarioId = document.querySelector('#id');
const infoUsuarioNombre = document.querySelector('#nombre');
const infoUsuarioApellido = document.querySelector('#apellido');
const infoUsuarioEdad = document.querySelector('#edad');
const infoUsuarioEmail = document.querySelector('#email');

const arrayUsuarios = [
  {
    id: 0,
    nombre: "Agapito",
    apellido: "Pérez",
    edad: 24,
    email: "agapito@gmail.com",
  },
  {
    id: 1,
    nombre: "Benito",
    apellido: "Camela",
    edad: 28,
    email: "tardes@gmail.com",
  },
  {
    id: 2,
    nombre: "Mari",
    apellido: "Kondo",
    edad: 48,
    email: "buenas@gmail.com",
  },
]


// Eventos

document.addEventListener('submit', (ev) => {
  ev.preventDefault();
  ev.target.matches('#fomulario');

  llamarAPI(infoUsuarioId.value)
    .then(respuesta => {
      infoUsuarioId.value = respuesta.id;
      infoUsuarioNombre.value = respuesta.nombre;
      infoUsuarioApellido.value = respuesta.apellido;
      infoUsuarioEdad.value = respuesta.edad;
      infoUsuarioEmail.value = respuesta.email;
    })
    .catch(error => {
      console.log(error);
    });
})


// Funciones

const llamarAPI = (id) => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const usuarioRecuperado = devolverObjUsuario(id);
      if (!usuarioRecuperado) {
        reject('ERROR: Datos de usuario NO recogidos.');
      } else {
        resolve(usuarioRecuperado);
      }
    }, 2000);
  })
};

const devolverObjUsuario = (idABuscar) => arrayUsuarios.find(({ id }) => id === Number(idABuscar));


// Invocaciones.
