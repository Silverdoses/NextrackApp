// Dom7
var $$ = Dom7;
// Secure storage
var ss;

document.addEventListener('deviceready', function () {
  cordova.plugins.backgroundMode.setDefaults({
    title: 'Servicio en ejecución',
    text: 'Presiona para regresar a la aplicación.',
    icon: 'icon', // this will look for icon.png in platforms/android/res/drawable|mipmap
    color: undefined, // hex format like 'F14F4D'
    resume: true,
    silent: false,
    hidden: true,
    bigText: false
  });

  // Solicita la ejecución en segundo plano y sobreescribe la acción del botón retroceder del teléfono.
  cordova.plugins.backgroundMode.enable();
  cordova.plugins.backgroundMode.overrideBackButton();


  ss = new cordova.plugins.SecureStorage(
    function () {},
    function (error) {app.dialog.alert('Por favor configure un modo de bloqueo en su teléfono antes de continuar.')},
    'nextrack_data');

  ss.get(
    function (value) {
      var data = JSON.parse(value);
      login(data.user, data.pword);
      initMap();
      },
    function (error) {app.loginScreen.open('#login-view');},
    'nextrack_data');

}, false);


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.tracking.nextrack', // App bundle ID
  name: 'NexTrack', // App name
  theme: 'auto', // Automatic theme detection

  // App root methods
  methods: {

  },
});




// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#login-view .login-button').on('click', function () {
  var username = $$('#login-view [name="username"]').val();
  var password = $$('#login-view [name="password"]').val();

  login(username, password);
  initMap();
});
