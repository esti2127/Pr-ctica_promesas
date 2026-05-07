// Variables

const formulario = document.querySelector('#formulario');

// Eventos


// Funciones

const llamarAPI = () => {
  return new Promise((resolve, reject) => {
    // TODO: Recoger datos de usuario.

    if (ok) {
      resolve('Datos de usuario recogidos correctamente.');
    } else {
      reject('ERROR: Datos de usuario NO recogidos.');
    }
  })
};


// Invocaciones.

llamarAPI()
  .then(respuesta => {

  })
  .catch(error => {

  });
