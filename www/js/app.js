// Dom7
var $$ = Dom7;
// Secure storage
var ss;

document.addEventListener('deviceready', function () {
  // 1) Request background execution
  cordova.plugins.backgroundMode.enable();
  // Ensure background execution.
  cordova.plugins.backgroundMode.overrideBackButton();
  cordova.plugins.backgroundMode.excludeFromTaskList();

  ss = new cordova.plugins.SecureStorage(
    function () { console.log('Success')},
    function (error) { console.log('Error ' + error); },
    'nextrack_data');

  ss.get(
    function (value) {
      var data = JSON.parse(value);
      login(data.user, data.pword);
      setPanelData();
      initMap();},
    function (error) {
      app.loginScreen.open('#login-view');
      app.dialog.alert(error); },
    'nextrack-data');

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
  setPanelData();

  initMap();
});
