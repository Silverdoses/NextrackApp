/* Traccar API Handling Methods */

var request = require('request');
var j = request.jar();
baseurl = 'http://13.58.18.21:8082';

function login(username, passwd) {
  request.post({url: baseurl + '/api/session',
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
            function (key) { console.log('Set ' + key); },
            function (error) { console.log('Error ' + error); },
            'nextrack-data', '{"user": "' +  username + '", "pword": "' + passwd +'"}');
        }
        else
          app.dialog.alert('No se puede iniciar sesión. Verifique los datos ingresados.')
      }
    });
}
