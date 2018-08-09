// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAyS3BZ0O9m_GMM_asf4g77mEHFuNZn2iI",
  authDomain: "registro-de-usuarios-8ca22.firebaseapp.com",
  projectId: "registro-de-usuarios-8ca22",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

//Add data

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});

//





