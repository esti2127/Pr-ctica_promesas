// Variables

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

  llamarAPI(ev.target.id.value)
    .then(respuesta => {
      /*
        También modificamos el valor del id por si lo han modificado en el
        formulario durante el tiempo de recuperación de datos de la BD.
      */
      ev.target.id.value = respuesta.id;
      ev.target.nombre.value = respuesta.nombre;
      ev.target.apellido.value = respuesta.apellido;
      ev.target.edad.value = respuesta.edad;
      ev.target.email.value = respuesta.email;
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
