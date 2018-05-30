document.addEventListener('deviceready', function () {
  // 1) Request background execution
  cordova.plugins.backgroundMode.enable();
  // Ensure background execution.
  cordova.plugins.backgroundMode.overrideBackButton();
  cordova.plugins.backgroundMode.excludeFromTaskList();
}, false);

// Dom7
var $$ = Dom7;
var request = require('request');
var j = request.jar();
baseurl = 'http://13.58.18.21:8082';

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.tracking.nextrack', // App bundle ID
  name: 'NexTrack', // App name
  theme: 'auto', // Automatic theme detection

  // App root methods
  methods: {
    login: function (username, passwd) {
      request.post({url: baseurl + '/api/session',
          form: {email: username, password: passwd}, jar:j},

        function (error, response, body) {
          if (error){
            app.dialog.alert('Ocurrió un error con la solicitud. Por favor verifique su conexión' +
              ' a internet y el estado del servidor Nextrack.');
            return false;
          }
          else {
            if (response.statusCode === 200)
              app.loginScreen.close('#login-view');
            else
              app.dialog.alert('No se puede iniciar sesión. Verifique los datos ingresados.')
          }
          console.log(document.cookie);
        });
    },
  },
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

app.loginScreen.open('#login-view');

// Login Screen Demo
$$('#login-view .login-button').on('click', function () {
  var username = $$('#login-view [name="username"]').val();
  var password = $$('#login-view [name="password"]').val();

  app.methods.login(username, password);
});
