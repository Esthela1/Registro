// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAyS3BZ0O9m_GMM_asf4g77mEHFuNZn2iI",
  authDomain: "registro-de-usuarios-8ca22.firebaseapp.com",
  projectId: "registro-de-usuarios-8ca22",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//Add data
function guardar(){
  let name1 = document.getElementById("visitWorker").value;
  let conpan = document.getElementById("company").value;
  let name = document.getElementById("name").value;
  let visitnt = document.getElementById("visit").value;

  db.collection("users").add({
    visit: name1,
    doing: conpan,
    name2: name,
    visiting: visitnt

  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("visitWorker").value = "";
    document.getElementById("company").value = "";
    document.getElementById("name").value = "";
    document.getElementById("visit").value = "";
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  }); 
}


//





