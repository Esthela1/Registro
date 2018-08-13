let config = {
  apiKey: "AIzaSyAyS3BZ0O9m_GMM_asf4g77mEHFuNZn2iI",
  authDomain: "registro-de-usuarios-8ca22.firebaseapp.com",
  databaseURL: "https://registro-de-usuarios-8ca22.firebaseio.com",
  projectId: "registro-de-usuarios-8ca22",
  storageBucket: "registro-de-usuarios-8ca22.appspot.com",
  messagingSenderId: "1017172818806"
};
firebase.initializeApp(config);
// elementos del DOM
let visitor = document.getElementById('visitors');
let worker = document.getElementById('workers');
let containerButton = document.getElementById('containerButton');
let formVisit = document.getElementById('formVisit');
let formWorker = document.getElementById('formWorker');
// formulario de visitas
let companyVisit = document.getElementById('companyVisit');
let nameVisitor = document.getElementById('nameVisitor');
let whoVisit = document.getElementById('whoVisit');
let emailVisit = document.getElementById('emailVisit');
let showCamera = document.getElementById('showCamera');
let showCameraW = document.getElementById('showCameraW');
// zona de foto 
let camera = document.getElementById('camera');
let cameraW = document.getElementById('cameraW');
// boton de guardar usuario
let saveVisitor = document.getElementById('saveVisitor');
// variables para foto en JS
let videoTracks;
// formulario de workers
let companyWorker = document.getElementById('companyWorker');
let nameWorker = document.getElementById('nameWorker');
let saveWorker = document.getElementById('saveWorker');
// variables para Firebase
let database = firebase.database(); // base de datos en tiempo real
let storage = firebase.storage(); // base de datos para archivos
// elementos del DOM segunda vista 
let buttonsInit = document.getElementById('buttonsInit');
let singIn = document.getElementById('singIn');
let initFastAccess = document.getElementById('initFastAccess');
let formAdmin = document.getElementById('formAdmin');
let adminMail = document.getElementById('adminMail');
let adminPassword = document.getElementById('adminPassword');
let openPage = document.getElementById('openPage');
// botones para volver 
let homePage = document.getElementById('homePage');
let goHome = document.getElementById('goHome');
let goHomeV = document.getElementById('goHomeV');
let goHomeW = document.getElementById('goHomeW');