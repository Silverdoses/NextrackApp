/* Traccar API Handling Methods */

var request = require('request');
var j = request.jar();
baseurl = 'http://13.58.18.21:8082/api';

/* Este método login intenta obtener las credenciales del objeto SecureStorage (ss).
 * En caso de no existir, las añade y encripta en el dispositivo. Importante recordar que se requiere
 * Un tipo de bloqueo en el teléfono (patrón, constraseña, etc.) */
function login(username, passwd) {
  request.post({url: baseurl + '/session',
      form: {email: username, password: passwd}, jar:j},

    function (error, response, body) {
      if (error){
        app.dialog.alert('Ocurrió un error con la solicitud. Por favor verifique su conexión' +
          ' a internet y el estado del servidor Nextrack.');
      }
      else {
        if (response.statusCode === 200) {
          app.loginScreen.close('#login-view');
          ss.set(
            function (key) {console.log('Set ' + key); },
            function (error) { console.log('Error ' + error); },
            'nextrack_data', '{"user": "' +  username + '", "pword": "' + passwd +'"}');
          getDevices();
        }
        else
          app.dialog.alert('No se puede iniciar sesión. Verifique los datos ingresados.')
      }
    });
}

// Obtiene la lista de dispositivos desde el servicio Traccar y añade los items a la lista lateral de la App
function getDevices() {
  ss.get(function (value) {
    data = JSON.parse(value);
    console.log(data)
    request.get({url: baseurl + '/devices', auth: {user: data.user, pass: data.pword, sendInmediately: false}},
      function (error, response, body){
        console.log(JSON.parse(body));
        setPanelData(JSON.parse(body));
      }
    );
  },
    function (error) {
      console.log(error);
    },

    'nextrack_data'
  );
}
