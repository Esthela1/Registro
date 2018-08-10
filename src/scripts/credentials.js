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
let saveVisitor = document.getElementById('saveVisitor');
// formulario de workers
let companyWorker = document.getElementById('companyWorker');
let nameWorker = document.getElementById('nameWorker');
let saveWorker = document.getElementById('saveWorker');
// variables para Firebase
let database = firebase.database();
let storage = firebase.storage();
// elementos del DOM segunda vista 
let buttonsInit = document.getElementById('buttonsInit');
let singIn = document.getElementById('singIn');
let initFastAccess = document.getElementById('initFastAccess');
let formAdmin = document.getElementById('formAdmin');
let adminMail = document.getElementById('adminMail');
let adminPassword = document.getElementById('adminPassword');
let openPage = document.getElementById('openPage');